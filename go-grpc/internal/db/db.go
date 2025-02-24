package db

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	pass "sebastianbaiju.com/product-grpc/internal/password"
	models_product "sebastianbaiju.com/product-grpc/internal/product/models"
	models_user "sebastianbaiju.com/product-grpc/internal/user/models"
)

var schemas = []interface{}{
	&models_user.Role{},
	&models_user.User{},
	&models_product.Product{},
}



var DB *gorm.DB

func DatabaseConnection() {
	databaseURL := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USERNAME"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)
	var err error
	DB, err = gorm.Open(postgres.Open(databaseURL), &gorm.Config{})
	if err != nil {
		log.Fatal("db connection error: ", err)
	}
	log.Println("db connection successful")
	DB.Exec(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)

	if err := DB.AutoMigrate(schemas...); err != nil {
		log.Printf("Failed to migrate Database: %v", err)
	}
	createSuperAdmin()
}

func CloseDB() {
	db, err := DB.DB()
	if err != nil {
		log.Fatal("Failed to get DB")
	}
	db.Close()
	log.Println("Database connection closed")
}

func createRole(name string) models_user.Role {
	role := models_user.Role{
		Role: name,
	}

	if err := DB.Table("roles").FirstOrCreate(&role, models_user.Role{
		Role: name,
	}).Error; err != nil {
		log.Println("Error create roleValue:", err)
	}
	return role
}

func createSuperAdmin() {
	username := "Admin"
	password := "admin"
	mainRole := "Admin"
	roleNames := []string{"User", "Manager", "Sales"}
	for _, name := range roleNames {
		createRole(name)
	}

	pass, err := pass.HashPassword(password)
	if err != nil {
		log.Println("Error create roleValue:", err)
	}
	user := models_user.User{
		Name:     username,
		Password: pass,
		UserName: username,
		RoleID:   createRole(mainRole).ID,
	}

	if err := DB.Table("users").FirstOrCreate(&user, models_user.User{UserName: username}).Error; err != nil {
		log.Println("Error create user:", err)
	}
}
