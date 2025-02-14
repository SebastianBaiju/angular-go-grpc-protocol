package login

import (
	"context"
	"slices"
	"strings"

	"github.com/golang-jwt/jwt/v4"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	pb "sebastianbaiju.com/product-grpc/internal/auth/pkg"
)

type keyType string

const (
	CLAIMS_KEY        keyType = "claims-key"
	AUTHORIZATION_KEY string  = "authorization"
)

type AuthInterceptor struct{}

func NewAuthInterceptor() *AuthInterceptor {
	return &AuthInterceptor{}
}

// interceptor for normal call
func (a *AuthInterceptor) Unary() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req interface{},
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (interface{}, error) {

		if a.isPublicMethod(info.FullMethod) {
			return handler(ctx, req)
		}

		claims, err := a.authorize(ctx)
		if err != nil {
			return nil, err
		}

		ctx = context.WithValue(ctx, CLAIMS_KEY, claims)
		return handler(ctx, req)
	}
}

// interceptor for steam call
func (a *AuthInterceptor) StreamInterceptor() grpc.StreamServerInterceptor {
	return func(
		srv interface{},
		stream grpc.ServerStream,
		info *grpc.StreamServerInfo,
		handler grpc.StreamHandler,
	) error {
		ctx := stream.Context()
		if a.isPublicMethod(info.FullMethod) {
			return handler(srv, stream)
		}

		claims, err := a.authorize(ctx)
		if err != nil {
			return err
		}

		ctx = context.WithValue(ctx, CLAIMS_KEY, claims)
		return handler(srv, stream)
	}
}

// check url is public or not
func (a *AuthInterceptor) isPublicMethod(fullMethod string) bool {
	var publicMethods = []string{
		pb.AuthenticationService_Login_FullMethodName,
	}
	return slices.Contains(publicMethods, fullMethod)
}

// used to authorize token
func (a *AuthInterceptor) authorize(ctx context.Context) (jwt.MapClaims, error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "missing metadata")
	}

	tokens := md[AUTHORIZATION_KEY]
	if len(tokens) == 0 || tokens[0] == "" {
		return nil, status.Error(codes.Unauthenticated, "authorization token is missing")
	}

	tokenHeaders := tokens[0]
	tokenArray := strings.Split(tokenHeaders, " ")
	var token string
	if len(tokenArray) > 1 {
		token = tokenArray[1]
	} else {
		token = tokenArray[0]
	}

	claims, err := ValidateToken(token)
	if err != nil {
		return nil, status.Error(codes.Unauthenticated, "failed to extract claims")
	}

	return claims, nil
}
