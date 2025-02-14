# Connecting Angular and Golang with gRPC

## Overview
This project demonstrates how to establish a connection between an Angular frontend and a Golang backend using the gRPC protocol. By leveraging Protocol Buffers (protobufs), we enable efficient and structured communication between the two services.

## Technologies Used

### 🔹 Angular  
- `@ngx-grpc/core` – Connects Angular to the gRPC server  
- `@ngx-grpc/improbable-eng-grpc-web-client` – Enables gRPC-Web support  
- `@ngx-grpc/well-known-types` – Provides well-known protocol buffer types  
- `google-protobuf` – Handles protobuf serialization & deserialization  
- `ngx-cookie-service` – Manages cookies for authentication  
- `ngx-toastr` – Displays user-friendly toast notifications  
- `rxjs` & `subsink` – Manages observables and subscriptions efficiently  

### 🔹 Golang  
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
#### Angular
```sh
cd angular-gRPC
npm install
```

#### Golang
```sh
cd go-gRPC
go mod tidy
```

### 3. Compile Proto Files
#### Angular
```sh
npm run proto:generate
```

#### Golang
```sh
cd proto
make all
```

### 4. Run the Project
#### Start Angular Application
```sh
ng serve
```

#### Start Golang Server
```sh
go run main.go
```

## Environment Configuration

### Golang (`.env` file)
```
PORT=8080

JWT_SECRET=d3c8ff9e45103061ebb24c683b6ebc28d40a0ff84731da79fc361dab6783d24ec8c4fd8fb6a1328c9d93fad3325dc9cfbd0932c64178b50edf81476a00b583182f81f5ae4f9c35057aaad983e36367ecc17da413f6973b88902f35d476b1c5cc77253ab9ce15c82c4d5fd05a694b4987d9d942fb5dcb6d6f72548428694f6ec065d34f692a4be5f4c5100171818ee41b2a5375e3fa14974ef98964a224c8d9b117a771650903267d1dba4785634d320100c7467f7dbb331432d017145832aa54aef72450008504f1aad0b169652341af8dffc1f198271a1b37e1cee9427cef8d73712851b8774069a426fd95fadfbf6d0be51ba108bf64a0a5726a47ff20ce85

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=depmus-5vapqy-zemGys
DB_NAME=postgres
```

### Angular (`env.js`)
```js
(function(window) {
    window.__env = window.__env || {};
    window.__env.baseUrl = 'http://localhost:8080';
}(this));
```

## Resources
- [gRPC Go Quickstart](https://grpc.io/docs/languages/go/quickstart/)
- [GORM Documentation](https://gorm.io/index.html)
- [ngx-grpc GitHub](https://github.com/smnbbrv/ngx-grpc)

## Inspiration
This project is inspired by [grpc-template](https://github.com/Jerinji2016/grpc-template). Contributions are welcome—let’s build something great together! 🚀

