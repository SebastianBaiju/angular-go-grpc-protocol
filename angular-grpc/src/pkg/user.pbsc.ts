/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './user.pb';
import { GRPC_USER_SERVICE_CLIENT_SETTINGS } from './user.pbconf';
/**
 * Service client implementation for UserService
 */
@Injectable({ providedIn: 'any' })
export class UserServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /UserService/GetUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.User>>
     */
    getUser: (
      requestData: thisProto.GetUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.User>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/UserService/GetUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetUserRequest,
        responseClass: thisProto.User
      });
    },
    /**
     * Unary call: /UserService/CreateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserResponse>>
     */
    createUser: (
      requestData: thisProto.CreateUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/UserService/CreateUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateUserRequest,
        responseClass: thisProto.UserResponse
      });
    },
    /**
     * Unary call: /UserService/UpdateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserResponse>>
     */
    updateUser: (
      requestData: thisProto.UpdateUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/UserService/UpdateUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateUserRequest,
        responseClass: thisProto.UserResponse
      });
    },
    /**
     * Unary call: /UserService/DeleteUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserResponse>>
     */
    deleteUser: (
      requestData: thisProto.DeleteUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/UserService/DeleteUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteUserRequest,
        responseClass: thisProto.UserResponse
      });
    },
    /**
     * Server streaming: /UserService/ListUserStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.User>>
     */
    listUserStream: (
      requestData: thisProto.ListUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.User>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/UserService/ListUserStream',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListUserRequest,
        responseClass: thisProto.User
      });
    },
    /**
     * Unary call: /UserService/ListUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserListResponse>>
     */
    listUser: (
      requestData: thisProto.ListUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/UserService/ListUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListUserRequest,
        responseClass: thisProto.UserListResponse
      });
    },
    /**
     * Unary call: /UserService/ListRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RoleResponse>>
     */
    listRole: (
      requestData: thisProto.RoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RoleResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/UserService/ListRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.RoleRequest,
        responseClass: thisProto.RoleResponse
      });
    },
    /**
     * Bidirectional streaming: /UserService/UserListSearch
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserSearchResult>>
     */
    userListSearch: (
      requestData: Observable<thisProto.UserSearchListRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserSearchResult>> => {
      return this.handler.handle({
        type: GrpcCallType.bidiStream,
        client: this.client,
        path: '/UserService/UserListSearch',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserSearchListRequest,
        responseClass: thisProto.UserSearchResult
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USER_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('UserService', settings);
  }

  /**
   * Unary call @/UserService/GetUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.User>
   */
  getUser(
    requestData: thisProto.GetUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.User> {
    return this.$raw
      .getUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/UserService/CreateUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserResponse>
   */
  createUser(
    requestData: thisProto.CreateUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserResponse> {
    return this.$raw
      .createUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/UserService/UpdateUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserResponse>
   */
  updateUser(
    requestData: thisProto.UpdateUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserResponse> {
    return this.$raw
      .updateUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/UserService/DeleteUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserResponse>
   */
  deleteUser(
    requestData: thisProto.DeleteUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserResponse> {
    return this.$raw
      .deleteUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/UserService/ListUserStream
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.User>
   */
  listUserStream(
    requestData: thisProto.ListUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.User> {
    return this.$raw
      .listUserStream(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/UserService/ListUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserListResponse>
   */
  listUser(
    requestData: thisProto.ListUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserListResponse> {
    return this.$raw
      .listUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/UserService/ListRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RoleResponse>
   */
  listRole(
    requestData: thisProto.RoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RoleResponse> {
    return this.$raw
      .listRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Bidirectional streaming @/UserService/UserListSearch
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserSearchResult>
   */
  userListSearch(
    requestData: Observable<thisProto.UserSearchListRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserSearchResult> {
    return this.$raw
      .userListSearch(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
