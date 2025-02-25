# Connecting Angular and Go with gRPC

## Overview
This project demonstrates how to establish a connection between an Angular frontend and a Go backend using the gRPC protocol. By leveraging Protocol Buffers (protobufs), we enable efficient and structured communication between the two services.

## Technologies Used

### 🔹 Angular  
- `@ngx-grpc/core` – Connects Angular to the gRPC server  
- `@ngx-grpc/improbable-eng-grpc-web-client` – Enables gRPC-Web support  
- `@ngx-grpc/well-known-types` – Provides well-known protocol buffer types  
- `google-protobuf` – Handles protobuf serialization & deserialization  
- `ngx-cookie-service` – Manages cookies for authentication  
- `ngx-toastr` – Displays user-friendly toast notifications  
- `rxjs` & `subsink` – Manages observables and subscriptions efficiently  

### 🔹 Go  
- `google.golang.org/grpc` – Implements gRPC server  
- `google.golang.org/protobuf` – Manages protocol buffers  
- `github.com/improbable-eng/grpc-web` – Enables gRPC-Web support  
- `github.com/gofrs/uuid/v5` – Generates unique IDs  
- `github.com/golang-jwt/jwt/v4` – Handles authentication  
- `gorm.io/gorm` & `gorm.io/driver/postgres` – Database ORM and PostgreSQL driver  

## Setup and Installation

### 1. Clone the Repository
```sh
git clone https://github.com/SebastianBaiju/angular-go-grpc-protocol.git
```

### 2. Install Dependencies
#### Angular
```sh
cd angular-gRPC
npm install
```

#### Go
```sh
cd go-gRPC
go mod tidy
```

### 3. Compile Proto Files
#### Angular
```sh
npm run proto:generate
```

#### Go
```sh
cd proto
make all
```

### 4. Run the Project
#### Start Angular Application
```sh
ng serve
```

#### Start Go Server
```sh
go run main.go
```

## Environment Configuration

### Go (`.env` file)
```
PORT=8080

JWT_SECRET=SECRET

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=PASSWORD
DB_NAME=postgres
```

### Angular (`env.js`)
```js
(function(window) {
    window.__env = window.__env || {};
    window.__env.baseUrl = 'http://localhost:8080';
}(this));
```
## Docker
```sh
docker pull sebu5683/grpc-go-angular:latest
```

## Resources
- [gRPC Go Quickstart](https://grpc.io/docs/languages/go/quickstart/)
- [GORM Documentation](https://gorm.io/index.html)
- [ngx-grpc GitHub](https://github.com/smnbbrv/ngx-grpc)
- [Docker](https://hub.docker.com/repository/docker/sebu5683/grpc-go-angular/tags)
- [Demo Url](https://grpc-go-angular.sebastianbaiju.com/)
  - username: admin
  - password: admin

## Inspiration
This project is inspired by [grpc-template](https://github.com/Jerinji2016/grpc-template). Contributions are welcome—let’s build something great together! 🚀

