package product_service

import (
	"context"
	"fmt"
	"io"

	"github.com/gofrs/uuid/v5"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	models_product "sebastianbaiju.com/product-grpc/internal/product/models"
	product "sebastianbaiju.com/product-grpc/internal/product/pkg"
	productRepo "sebastianbaiju.com/product-grpc/internal/product/repositories"
)

type ProductServer struct {
	product.UnimplementedProductServiceServer
}

var repo = &productRepo.ProductRepository{}

// get product from database
func (s *ProductServer) GetProduct(ctx context.Context, in *product.GetProductRequest) (*product.Product, error) {
	productUUID, er := uuid.FromString(in.Id)
	if er != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to get product: %v", er))
	}
	prod, err := repo.GetProductById(productUUID)
	productValue := prod.ModelToEntity()
	return &productValue, err
}

// create product
func (c *ProductServer) CreateProduct(ctx context.Context, productValue *product.CreateProductRequest) (*product.CreateProductResponse, error) {
	productData := &models_product.Product{
		Name:        productValue.Name,
		Description: productValue.Description,
		Price:       productValue.Price,
		Filename:    productValue.Filename,
		Data:        productValue.Data,
		Quantity:    productValue.Quantity,
	}
	err := repo.CreateProduct(productData)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to create product: %v", err))
	}
	return &product.CreateProductResponse{Value: " Product Created successfully"}, nil
}

func (c *ProductServer) UpdateProduct(ctx context.Context, productValue *product.UpdateProductRequest) (*product.CreateProductResponse, error) {
	productUUID, er := uuid.FromString(productValue.Id)
	if er != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to updated: %v", er))
	}
	productData := &models_product.Product{
		ID:          productUUID,
		Name:        productValue.Name,
		Description: productValue.Description,
		Price:       productValue.Price,
		Filename:    productValue.Filename,
		Data:        productValue.Data,
		Quantity:    productValue.Quantity,
	}
	err := repo.UpdateProduct(productData)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to updated: %v", err))
	}
	return &product.CreateProductResponse{Value: fmt.Sprintf("Product %v updated", productValue.Name)}, nil
}

func (c *ProductServer) DeleteProduct(ctx context.Context, productValue *product.DeleteProductRequest) (*product.DeleteProductResponse, error) {
	productUUID, er := uuid.FromString(productValue.Id)
	if er != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed Delete %v", er))
	}
	err := repo.DeleteProduct(productUUID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed Delete %v", err))
	}
	return &product.DeleteProductResponse{Value: "Product Deleted successfully"}, nil
}

// create stream product list
func (c *ProductServer) ListProductStream(req *product.ListProductRequest, stream product.ProductService_ListProductStreamServer) error {

	var products, _, err = repo.ProductList(req)
	if err != nil {
		return status.Error(codes.Internal, fmt.Sprintf("List failed: %v", err))
	}
	// Stream the products one by one
	for i := range products {
		// Send each product to the stream
		productEntity := products[i].ModelToEntity()
		if err := stream.Send(&productEntity); err != nil {
			return err // Return if there's an issue sending a product to the stream
		}
	}

	return nil
}

// product list with limit
func (c *ProductServer) ListProduct(ctx context.Context, req *product.ListProductRequest) (*product.ProductListResponse, error) {
	// Fetch products from the database
	var products, productCount, err = repo.ProductList(req)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("List failed: %v", err))
	}

	// Return a new Product with the computed product price
	productList := make([]*product.Product, len(products))
	for i := range products {
		productEntity := products[i].ModelToEntity()
		productList[i] = &productEntity
	}
	return &product.ProductListResponse{Products: productList, Count: productCount}, nil
}

// bidirectional product search
func (s *ProductServer) ProductListSearch(stream grpc.BidiStreamingServer[product.ProductSearchListRequest, product.SearchResult]) error {

	ctx := stream.Context()

	for {

		// exit if context is done
		// or continue
		select {
		case <-ctx.Done():
			return ctx.Err()
		default:
		}

		// receive data from stream
		req, err := stream.Recv()
		if err == io.EOF {
			// return will close stream from server side
			return nil
		}
		if err != nil {
			continue
		}
		var products, errorValue = repo.FindProductByProductName(req.Name, 10)

		productList := make([]*product.Search, len(products))
		for i := range products {
			productEntity := products[i].ModelToEntity()
			productList[i] = &product.Search{
				Id:   productEntity.Id,
				Name: productEntity.Name,
			}
		}
		if errorValue != nil {

		}
		resp := product.SearchResult{
			Search: productList,
		}
		if err := stream.Send(&resp); err != nil {

		}
	}
}
