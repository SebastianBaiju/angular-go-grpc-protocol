# Connecting Angular and Golang with gRPC

## Overview
This project demonstrates how to establish a connection between an Angular frontend and a Golang backend using the gRPC protocol. By leveraging Protocol Buffers (protobufs), we enable efficient and structured communication between the two services.

## Technologies Used


### 🔹 Golang 
### Technologies Used 
- `google.golang.org/grpc` – Implements gRPC server  
- `google.golang.org/protobuf` – Manages protocol buffers  
- `github.com/improbable-eng/grpc-web` – Enables gRPC-Web support  
- `github.com/gofrs/uuid/v5` – Generates unique IDs  
- `github.com/golang-jwt/jwt/v4` – Handles authentication  
- `gorm.io/gorm` & `gorm.io/driver/postgres` – Database ORM and PostgreSQL driver  

## Setup and Installation

### 1. Clone the Repository
```sh
git clone https://github.com/SebastianBaiju/angular-golang-grpc-protocol.git
```

### 2. Install Dependencies

#### Golang
```sh
cd go-gRPC
go mod tidy
```

### 3. Compile Proto Files

#### Golang
```sh
cd proto
make all
```

### 4. Run the Project

#### Start Golang Server
```sh
go run main.go
```

## Environment Configuration

### Golang (`.env` file)
```
PORT=8080

JWT_SECRET=SECRET

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=PASSWORD
DB_NAME=postgres
```


## Resources
- [gRPC Go Quickstart](https://grpc.io/docs/languages/go/quickstart/)
- [GORM Documentation](https://gorm.io/index.html)

## Inspiration
This project is inspired by [grpc-template](https://github.com/Jerinji2016/grpc-template). Contributions are welcome—let’s build something great together! 🚀

