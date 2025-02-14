.PHONY: all
all: generate_product_grpc generate_user_grpc generate_auth_grpc

generate_product_grpc: 
	protoc --go_out=../internal/product/pkg --go_opt=paths=source_relative \
    --go-grpc_out=../internal/product/pkg --go-grpc_opt=paths=source_relative \
    product.proto
generate_user_grpc: 
	protoc --go_out=../internal/user/pkg --go_opt=paths=source_relative \
    --go-grpc_out=../internal/user/pkg --go-grpc_opt=paths=source_relative \
    user.proto
generate_auth_grpc: 
	protoc --go_out=../internal/auth/pkg --go_opt=paths=source_relative \
    --go-grpc_out=../internal/auth/pkg --go-grpc_opt=paths=source_relative \
    auth.proto