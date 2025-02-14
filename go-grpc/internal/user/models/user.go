package models_user

import (
	"github.com/gofrs/uuid/v5"
	user "sebastianbaiju.com/product-grpc/internal/user/pkg"
)

type User struct {
	ID       uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Name     string
	UserName string `gorm:"not null;unique"`
	Password string
	RoleID   uuid.UUID `gorm:"type:uuid;not null"`
	Filename string
	Data     []byte `gorm:"type:bytea"`
	Role     Role   `gorm:"foreignKey:RoleID;references:ID"`
}

type Role struct {
	ID   uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Role string
}

func (User) TableName() string {
	return "users"
}

func (u *User) ModelToEntity() *user.User {
	return &user.User{
		Id:       u.ID.String(),
		Name:     u.Name,
		Role:     &user.Role{Id: u.RoleID.String(), Role: u.Role.Role},
		Filename: u.Filename,
		Data:     u.Data,
		Username: u.UserName,
		// RoleID:   u.RoleID,
	}
}

func (u *Role) ModelToEntity() *user.Role {
	return &user.Role{
		Id:   u.ID.String(),
		Role: u.Role,
	}
}
