package product_repositories

import (
	"strings"

	"github.com/gofrs/uuid/v5"
	"sebastianbaiju.com/product-grpc/internal/db"
	models_product "sebastianbaiju.com/product-grpc/internal/product/models"
	product "sebastianbaiju.com/product-grpc/internal/product/pkg"
)

// Database Query

type ProductRepository struct{}

func (repo *ProductRepository) CreateProduct(productValue *models_product.Product) error {
	if err := db.DB.Table("products").Create(&productValue).Error; err != nil {
		return err
	}
	return nil
}

func (repo *ProductRepository) UpdateProduct(productValue *models_product.Product) error {

	if err := db.DB.Table(productValue.TableName()).
		Where("id = ?", productValue.ID).
		Select("name", "description", "price", "filename", "quantity", "data").
		Updates(productValue).
		Error; err != nil {
		return err
	}
	return nil
}

func (repo *ProductRepository) DeleteProduct(id uuid.UUID) error {
	var product models_product.Product
	if err := db.DB.Table("products").Delete(&product, id).Error; err != nil {
		return err
	}
	return nil
}

func (repo *ProductRepository) GetProductById(id uuid.UUID) (*models_product.Product, error) {
	var productValue models_product.Product
	if err := db.DB.Table("products").First(&productValue, id).Error; err != nil {
		return &productValue, err
	}
	return &productValue, nil
}

func (repo *ProductRepository) ProductList(req *product.ListProductRequest) ([]models_product.Product, int64, error) {

	if req.Limit == 0 {
		req.Limit = 10
	}
	var products []models_product.Product
	if req.Name != "" {
		if err := db.DB.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(req.Name)+"%").Limit(int(req.Limit)).Offset(int(req.Offset)).Find(&products).Error; err != nil {
			return products, 0, err
		}
	} else {
		if err := db.DB.Limit(int(req.Limit)).Offset(int(req.Offset)).Find(&products).Error; err != nil {
			return products, 0, err
		}
	}

	return products, repo.GetProductCount(), nil
}

func (repo *ProductRepository) FindProductByProductName(name string, limit int) ([]models_product.Product, error) {
	if limit == 0 {
		limit = 10
	}
	var products []models_product.Product
	if name != "" {
		if err := db.DB.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(name)+"%").Distinct("name").Find(&products).Error; err != nil {
			return products, err
		}
	}
	return products, nil
}

func (repo *ProductRepository) GetProductCount() int64 {
	var count int64
	db.DB.Table("products").Count(&count)
	return count
}
