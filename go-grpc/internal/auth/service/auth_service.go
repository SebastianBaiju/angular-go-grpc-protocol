package login

import (
	"context"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	pb "sebastianbaiju.com/product-grpc/internal/auth/pkg"
	password "sebastianbaiju.com/product-grpc/internal/password"
	user_repositories "sebastianbaiju.com/product-grpc/internal/user/repositories"
)

type AuthenticationService struct {
	pb.UnimplementedAuthenticationServiceServer
	userRepo *user_repositories.UserRepository
}

func NewAuthenticationService() *AuthenticationService {
	return &AuthenticationService{}
}

/* The Login function is part of the AuthenticationService and handles the process of authenticating a user by verifying their credentials (username and password) and generating a token if the credentials are valid.

Parameters:
	ctx context.Context: This is the context for the current request, used for managing request-scoped values, cancellation, and deadlines.
	req *pb.LoginRequest: This is the login request object that contains the Username and Password provided by the user.
Return Values:
	(*pb.LoginResponse, error):
	The function returns a LoginResponse containing the generated token if the authentication is successful.
	If there's an error at any point, it returns an error response along with an appropriate status code.*/

func (s *AuthenticationService) Login(ctx context.Context, req *pb.LoginRequest) (*pb.LoginResponse, error) {

	user, err := s.userRepo.GetUserDetails(req.Username)
	if err != nil || user.Name == "" {
		return nil, status.Error(codes.Unauthenticated, "user does not exist")
	}

	if !password.CheckPasswordHash(req.Password, user.Password) || user.Password == "" {
		return nil, status.Error(codes.Unauthenticated, "invalid credentials")
	}

	token, err := GenerateToken(user.ModelToEntity())
	if err != nil {
		return nil, status.Error(codes.Internal, "failed to generate token")
	}

	return &pb.LoginResponse{Token: token}, nil
}
