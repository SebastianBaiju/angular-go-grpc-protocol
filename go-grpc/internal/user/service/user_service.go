package user_service

import (
	"context"
	"fmt"
	"io"
	"log"
	"math/rand"

	uuid "github.com/gofrs/uuid/v5"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	password "sebastianbaiju.com/product-grpc/internal/password"
	models_user "sebastianbaiju.com/product-grpc/internal/user/models"
	user "sebastianbaiju.com/product-grpc/internal/user/pkg"
	user_repositories "sebastianbaiju.com/product-grpc/internal/user/repositories"
)

type UserServer struct {
	user.UnimplementedUserServiceServer
}

var repo = &user_repositories.UserRepository{}

func generatePassword(length int) string {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[rand.Intn(len(charset))]
	}
	return string(b)
}

// get user details

func (s *UserServer) GetUser(ctx context.Context, in *user.GetUserRequest) (*user.User, error) {
	productUUID, er := uuid.FromString(in.Id)
	if er != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to get user: %v", er))
	}
	user, err := repo.GetUserById(productUUID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to get user: %v ", err))
	}

	return user.ModelToEntity(), nil
}

// create user
func (c *UserServer) CreateUser(ctx context.Context, userValue *user.CreateUserRequest) (*user.UserResponse, error) {
	passwordValue := generatePassword(30)
	pass, errPass := password.HashPassword(passwordValue)
	if errPass != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to create password: %v ", errPass))
	}
	userCheck, errors, _ := repo.UserExists(userValue.Username)
	if errors != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to create user: %v ", errors))
	} else if userCheck {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to create : %v ", "duplicate Username"))
	}

	if userValue.Username == "" {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to create user: %v ", "userName must be added"))
	}

	userData := &models_user.User{
		Name:     userValue.Name,
		Password: pass,
		UserName: userValue.Username,
		RoleID:   uuid.FromStringOrNil(userValue.Role),
		Filename: userValue.Filename,
		Data:     userValue.Data,
	}

	err := repo.CreateUser(userData)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to create user: %v ", err))
	}
	return &user.UserResponse{Value: fmt.Sprintf("User %v updated", userValue.Name), Password: passwordValue}, nil
}

func (c *UserServer) UpdateUser(ctx context.Context, userValue *user.UpdateUserRequest) (*user.UserResponse, error) {
	userUUID, er := uuid.FromString(userValue.Id)
	if er != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to update  uuid: %v", er))
	}
	userCheck, errors, currentUser := repo.UserExists(userValue.Username)

	usr,userError :=  repo.GetUserById(userUUID)
	if userError != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to update  uuid: %v", er))
	}
	if usr.UserName == "Admin" { 
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to update : %v ", "Admin cannot be updated"))
	}
	if errors != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to update user: %v ", errors))
	} else if userCheck && currentUser.ID != userUUID {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to update : %v ", "duplicate Username"))
	}

	if userValue.Username == "" {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to update user: %v ", "userName must be added"))
	}

	userData := &models_user.User{
		ID:       userUUID,
		Name:     userValue.Name,
		UserName: userValue.Username,
		RoleID:   uuid.FromStringOrNil(userValue.Role),
		Filename: userValue.Filename,
		Data:     userValue.Data,
		// Password: currentUser.Password,
	}
	log.Println(userData.Data, userData.Filename)
	err := repo.UpdateUser(userData)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to updated: %v", err))
	}
	return &user.UserResponse{Value: fmt.Sprintf("User %v updated", userValue.Name)}, nil
}

func (c *UserServer) DeleteUser(ctx context.Context, userValue *user.DeleteUserRequest) (*user.UserResponse, error) {
	userUUID, er := uuid.FromString(userValue.Id)
	usr,userError :=  repo.GetUserById(userUUID)
	if userError != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to Delete  uuid: %v", er))
	}
	if usr.UserName == "Admin" { 
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed to Delete : %v ", "Admin cannot be Deleted"))
	}
	if er != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed Delete %v", er))
	}
	err := repo.DeleteUser(userUUID)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("Failed Delete %v", err))
	}
	return &user.UserResponse{Value: "User Deleted successfully"}, nil
}

// create stream user list
func (c *UserServer) ListUserStream(req *user.ListUserRequest, stream user.UserService_ListUserStreamServer) error {

	var users, _, err = repo.UserList(req)
	if err != nil {
		return status.Error(codes.Internal, fmt.Sprintf("List failed: %v", err))
	}
	// Stream the users one by one
	for i := range users {
		// Send each user to the stream
		userEntity := users[i].ModelToEntity()
		if err := stream.Send(userEntity); err != nil {
			return err // Return if there's an issue sending a user to the stream
		}
	}

	return nil
}

// user list with limit
func (c *UserServer) ListUser(ctx context.Context, req *user.ListUserRequest) (*user.UserListResponse, error) {
	// Fetch users from the database
	var users, userCount, err = repo.UserList(req)
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("List failed: %v", err))
	}
	// Return a new User with the computed user price
	userList := make([]*user.User, len(users))
	for i := range users {
		userEntity := users[i].ModelToEntity()
		userList[i] = userEntity
	}
	return &user.UserListResponse{Users: userList, Count: userCount}, nil
}

func (c *UserServer) ListRole(ctx context.Context, req *user.RoleRequest) (*user.RoleResponse, error) {
	// Fetch users from the database
	var roles, err = repo.RoleList()
	if err != nil {
		return nil, status.Error(codes.Internal, fmt.Sprintf("List failed: %v", err))
	}
	// Return a new User with the computed user price
	roleList := make([]*user.Role, len(roles))
	for i := range roles {
		roleEntity := roles[i].ModelToEntity()
		roleList[i] = roleEntity
	}
	return &user.RoleResponse{Result: roleList}, nil
}

// bidirectional user search
func (s *UserServer) UserListSearch(stream grpc.BidiStreamingServer[user.UserSearchListRequest, user.UserSearchResult]) error {

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
		var users, errorValue = repo.FindUserByUserName(req.Name, 10)

		userList := make([]*user.UserSearch, len(users))
		for i := range users {
			userEntity := users[i].ModelToEntity()
			userList[i] = &user.UserSearch{
				Id:   userEntity.Id,
				Name: userEntity.Name,
			}
		}
		if errorValue != nil {

		}
		resp := user.UserSearchResult{
			Search: userList,
		}
		if err := stream.Send(&resp); err != nil {

		}
	}
}
