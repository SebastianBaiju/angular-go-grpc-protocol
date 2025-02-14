package main

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"os"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/joho/godotenv"
	"google.golang.org/grpc"
	auth "sebastianbaiju.com/product-grpc/internal/auth/pkg"
	auth_service "sebastianbaiju.com/product-grpc/internal/auth/service"
	"sebastianbaiju.com/product-grpc/internal/db"
	product "sebastianbaiju.com/product-grpc/internal/product/pkg"
	product_service "sebastianbaiju.com/product-grpc/internal/product/service"
	user "sebastianbaiju.com/product-grpc/internal/user/pkg"
	user_service "sebastianbaiju.com/product-grpc/internal/user/service"
)

func init() {
	env := os.Getenv("ENVIRONMENT")

	envFile := ".env"
	if env != "" {
		envFile = fmt.Sprintf(".env.%s", env)
	}
	log.Println(envFile)
	if err := godotenv.Load(envFile); err != nil {
		log.Fatalf("No %s file found", envFile)
	}

}

func main() {
	db.DatabaseConnection()
	authInterceptor := auth_service.NewAuthInterceptor()
	// Register interceptor
	server := grpc.NewServer(grpc.UnaryInterceptor(authInterceptor.Unary()),
		grpc.StreamInterceptor(authInterceptor.StreamInterceptor()))

	// Registering service
	product_service := &product_service.ProductServer{}
	product.RegisterProductServiceServer(server, product_service)

	auth.RegisterAuthenticationServiceServer(server, auth_service.NewAuthenticationService())

	user_service := &user_service.UserServer{}
	user.RegisterUserServiceServer(server, user_service)

	//grpc to web conversion
	wrappedGrpc := grpcweb.WrapServer(server, grpcweb.WithEndpointsFunc(func() []string {
		return []string{"*"}
	}))
	port := os.Getenv("PORT")
	// Start a TLS listener
	lis, err := net.Listen("tcp", fmt.Sprintf(":%v", port))
	if err != nil {
		fmt.Printf("failed to listen: %v\n", err)
		os.Exit(1)
	}

	tlsHttpServer := &http.Server{
		Addr: fmt.Sprintf(":%v", port),
		Handler: http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// Cors headers
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Credentials", "true")
			w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, X-Grpc-Web, X-Requested-With, authorization")

			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}

			// grpc http and stream requests
			if wrappedGrpc.IsGrpcWebRequest(r) {
				wrappedGrpc.HandleGrpcWebRequest(w, r)
			} else if wrappedGrpc.IsGrpcWebSocketRequest(r) {
				wrappedGrpc.HandleGrpcWebsocketRequest(w, r)
			} else {
				// Handle fallback HTTP requests
				http.DefaultServeMux.ServeHTTP(w, r)
			}
		}),
	}
	fmt.Printf("Starting server on http://localhost:%v", port)
	// Run listener
	if err := tlsHttpServer.Serve(lis); err != nil {
		fmt.Printf("Failed to start server: %v\n", err)
	}
}
