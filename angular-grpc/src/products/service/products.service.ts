import { CreateProductRequest, DeleteProductRequest, UpdateProductRequest } from './../../pkg/product.pb';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListProductRequest,  ProductSearchListRequest } from '../../pkg/product.pb';
import { ProductServiceClient } from '../../pkg/product.pbsc';

@Injectable()
export class ProductsService {

  constructor(
    private productPb: ProductServiceClient,
  ) { }


    createProduct(detail: CreateProductRequest){
      return this.productPb.createProduct(detail);
    }

    updateProduct(detail: UpdateProductRequest){
      return this.productPb.updateProduct(detail);
  }

    deleteProduct(id: DeleteProductRequest) {
      return this.productPb.deleteProduct(id);
    }

      productList(data: ListProductRequest) {
        return this.productPb.listProduct(data);
      }

  // biDirectional call example
  searchData(request: Observable<ProductSearchListRequest> ) {
    return this.productPb.productListSearch (request)
   }

}
