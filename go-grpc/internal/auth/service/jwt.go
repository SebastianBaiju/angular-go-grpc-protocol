package login

import (
	"errors"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v4"
	pb_person "sebastianbaiju.com/product-grpc/internal/user/pkg"
)

var jwtSecret = []byte(os.Getenv("JWT_SECRET"))

type Claims struct {
	Username string `json:"username"`
	Name     string `json:"name"`
	Id       string `json:"id"`
	jwt.RegisteredClaims
}

/*
The GenerateToken function is responsible for creating a signed JWT that can be used for authenticating and authorizing users. It takes a username as input and returns a signed JWT token, along with an error if something goes wrong during the generation process.

Parameters:

	username string: The username of the user for whom the token is being generated. This will be embedded in the token's claims to uniquely identify the user.

Return Values:

	(string, error):
	string: A JWT token string if the token is successfully created and signed.
	error: An error message (if any) encountered during the process of generating the token.
*/
func GenerateToken(user *pb_person.User) (string, error) {
	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		Username: user.Username,
		Name:     user.Name,
		Id:       user.Id,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtSecret)
}

/*
The ValidateToken function verifies the authenticity and validity of a JWT token. It takes a token string (tokenStr), parses it, and returns the claims embedded in the token if it is valid. If the token is invalid (e.g., due to an incorrect signature or invalid claims), it returns an error.

Parameters:

	tokenStr string: The JWT token in string format that needs to be validated and parsed.

Return Values:
(jwt.MapClaims, error):

	jwt.MapClaims: The claims embedded in the JWT, returned as a map-like structure (key-value pairs).
	error: An error message, if any, encountered during the token validation process.
*/
func ValidateToken(tokenStr string) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		return jwtSecret, nil
	})

	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			return nil, errors.New("invalid token signature")
		}
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return nil, errors.New("invalid claims")
	}

	return claims, nil
}
