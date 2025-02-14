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
import * as thisProto from './product.pb';
import { GRPC_PRODUCT_SERVICE_CLIENT_SETTINGS } from './product.pbconf';
/**
 * Service client implementation for ProductService
 */
@Injectable({ providedIn: 'any' })
export class ProductServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ProductService/GetProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Product>>
     */
    getProduct: (
      requestData: thisProto.GetProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Product>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ProductService/GetProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProductRequest,
        responseClass: thisProto.Product
      });
    },
    /**
     * Unary call: /ProductService/CreateProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateProductResponse>>
     */
    createProduct: (
      requestData: thisProto.CreateProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ProductService/CreateProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateProductRequest,
        responseClass: thisProto.CreateProductResponse
      });
    },
    /**
     * Unary call: /ProductService/UpdateProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateProductResponse>>
     */
    updateProduct: (
      requestData: thisProto.UpdateProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ProductService/UpdateProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateProductRequest,
        responseClass: thisProto.CreateProductResponse
      });
    },
    /**
     * Unary call: /ProductService/DeleteProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteProductResponse>>
     */
    deleteProduct: (
      requestData: thisProto.DeleteProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ProductService/DeleteProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteProductRequest,
        responseClass: thisProto.DeleteProductResponse
      });
    },
    /**
     * Server streaming: /ProductService/ListProductStream
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Product>>
     */
    listProductStream: (
      requestData: thisProto.ListProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Product>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ProductService/ListProductStream',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListProductRequest,
        responseClass: thisProto.Product
      });
    },
    /**
     * Unary call: /ProductService/ListProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ProductListResponse>>
     */
    listProduct: (
      requestData: thisProto.ListProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ProductListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ProductService/ListProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListProductRequest,
        responseClass: thisProto.ProductListResponse
      });
    },
    /**
     * Bidirectional streaming: /ProductService/ProductListSearch
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SearchResult>>
     */
    productListSearch: (
      requestData: Observable<thisProto.ProductSearchListRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SearchResult>> => {
      return this.handler.handle({
        type: GrpcCallType.bidiStream,
        client: this.client,
        path: '/ProductService/ProductListSearch',
        requestData,
        requestMetadata,
        requestClass: thisProto.ProductSearchListRequest,
        responseClass: thisProto.SearchResult
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_PRODUCT_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ProductService', settings);
  }

  /**
   * Unary call @/ProductService/GetProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Product>
   */
  getProduct(
    requestData: thisProto.GetProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Product> {
    return this.$raw
      .getProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ProductService/CreateProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateProductResponse>
   */
  createProduct(
    requestData: thisProto.CreateProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateProductResponse> {
    return this.$raw
      .createProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ProductService/UpdateProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateProductResponse>
   */
  updateProduct(
    requestData: thisProto.UpdateProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateProductResponse> {
    return this.$raw
      .updateProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ProductService/DeleteProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteProductResponse>
   */
  deleteProduct(
    requestData: thisProto.DeleteProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteProductResponse> {
    return this.$raw
      .deleteProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ProductService/ListProductStream
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Product>
   */
  listProductStream(
    requestData: thisProto.ListProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Product> {
    return this.$raw
      .listProductStream(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ProductService/ListProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ProductListResponse>
   */
  listProduct(
    requestData: thisProto.ListProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ProductListResponse> {
    return this.$raw
      .listProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Bidirectional streaming @/ProductService/ProductListSearch
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SearchResult>
   */
  productListSearch(
    requestData: Observable<thisProto.ProductSearchListRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SearchResult> {
    return this.$raw
      .productListSearch(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
