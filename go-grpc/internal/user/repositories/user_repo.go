package user_repositories

import (
	"strings"

	"github.com/gofrs/uuid/v5"
	"gorm.io/gorm"
	"sebastianbaiju.com/product-grpc/internal/db"
	models_user "sebastianbaiju.com/product-grpc/internal/user/models"
	user "sebastianbaiju.com/product-grpc/internal/user/pkg"
)

type UserRepository struct{}

// Database query

func (repo *UserRepository) CreateUser(userValue *models_user.User) error {
	if err := db.DB.Table("users").Create(&userValue).Error; err != nil {
		return err
	}
	return nil
}

func (repo *UserRepository) GetUserById(id uuid.UUID) (*models_user.User, error) {
	var userValue models_user.User
	if err := db.DB.Table("users").First(&userValue, id).Error; err != nil {
		return &userValue, err
	}
	return &userValue, nil
}

func (repo *UserRepository) CreateRole(roleValue *models_user.Role) error {
	if err := db.DB.Table("roles").Create(&roleValue).Error; err != nil {
		return err
	}
	return nil
}

func (repo *UserRepository) UpdateUser(userValue *models_user.User) error {
	if err := db.DB.Table("users").
		Where("id = ?", userValue.ID).
		Select("name", "user_name", "role_id", "filename", "data").
		Updates(userValue).
		Error; err != nil {
		return err
	}
	return nil
}
func (repo *UserRepository) DeleteUser(id uuid.UUID) error {
	var user models_user.User
	if err := db.DB.Table("users").Delete(&user, id).Error; err != nil {
		return err
	}
	return nil
}

func (repo *UserRepository) GetUserCount() int64 {
	var count int64
	db.DB.Table("users").Count(&count)
	return count
}

func (repo *UserRepository) UserList(req *user.ListUserRequest) ([]models_user.User, int64, error) {
	if req.Limit == 0 {
		req.Limit = 10
	}
	var users []models_user.User
	if req.Name != "" {
		if err := db.DB.Preload("Role").Where("LOWER(name) LIKE ?", "%"+strings.ToLower(req.Name)+"%").Limit(int(req.Limit)).Offset(int(req.Offset)).Find(&users).Error; err != nil {
			return users, 0, err
		}
	} else {
		if err := db.DB.Preload("Role").Limit(int(req.Limit)).Offset(int(req.Offset)).Find(&users).Error; err != nil {
			return nil, 0, err
		}
	}

	return users, repo.GetUserCount(), nil
}

func (repo *UserRepository) FindUserByUserName(name string, limit int) ([]models_user.User, error) {
	if limit == 0 {
		limit = 10
	}
	var users []models_user.User
	if name != "" {
		if err := db.DB.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(name)+"%").Distinct("name").Find(&users).Error; err != nil {
			return users, err
		}
	}
	return users, nil
}

func (repo *UserRepository) GetUserDetails(name string) (*models_user.User, error) {
	var users models_user.User
	if err := db.DB.Where("LOWER(user_name) = ?", strings.ToLower(name)).Find(&users).Error; err != nil {
		return &users, err
	}
	return &users, nil
}

// Check if a user exists by username (case-insensitive)
func (repo *UserRepository) UserExists(name string) (bool, error, *models_user.User) {
	var user models_user.User
	err := db.DB.Where("LOWER(user_name) = ?", strings.ToLower(name)).First(&user).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return false, nil, nil // No user found
		}
		return false, err, nil // Other errors
	}

	return true, nil, &user // User exists
}

func (repo *UserRepository) RoleList() ([]models_user.Role, error) {
	var roles []models_user.Role
	if err := db.DB.Table("roles").Find(&roles).Error; err != nil {
		return nil, err
	}
	return roles, nil
}
