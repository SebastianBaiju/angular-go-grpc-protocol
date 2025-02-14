package models_product

import (
	"github.com/gofrs/uuid/v5"
	pb_product "sebastianbaiju.com/product-grpc/internal/product/pkg"
)

type Product struct {
	ID          uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Name        string    `gorm:"not null"` // Required field
	Description string
	Price       float32
	Filename    string
	Quantity    string
	Data        []byte `gorm:"type:bytea"`
}

// get table
func (Product) TableName() string {
	return "products"
}

// convert to model to proto
func (u *Product) ModelToEntity() pb_product.Product {
	return pb_product.Product{
		Id:          u.ID.String(),
		Name:        u.Name,
		Description: u.Description,
		Price:       u.Price,
		Filename:    u.Filename,
		Quantity:    u.Quantity,
		Data:        u.Data,
	}
}
