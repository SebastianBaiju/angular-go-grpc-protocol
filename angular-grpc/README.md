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



### 3. Compile Proto Files
#### Angular
```sh
npm run proto:generate
```


### 4. Run the Project
#### Start Angular Application
```sh
ng serve
```



## Environment Configuration

### Angular (`env.js`)
```js
(function(window) {
    window.__env = window.__env || {};
    window.__env.baseUrl = 'http://localhost:8080';
}(this));
```

## Resources
- [ngx-grpc GitHub](https://github.com/smnbbrv/ngx-grpc)


