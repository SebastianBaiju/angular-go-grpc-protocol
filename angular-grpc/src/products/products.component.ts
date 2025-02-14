import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ProductsService } from './service/products.service';
import { ProductDetails, ProductsCardComponent } from "./products-card/products-card.component";
import { MatButtonModule } from '@angular/material/button';
import { SubSink } from 'subsink';
import { CreateProductRequest, DeleteProductRequest, ListProductRequest, Product, ProductListResponse, ProductSearchListRequest, SearchResult, UpdateProductRequest } from '../pkg/product.pb';
import { SearchComponent, SuggestedList } from "../core/widget/search/search.component";
import { MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  imports: [ProductsCardComponent, MatButtonModule, SearchComponent,MatPaginatorModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit, OnDestroy {
  private subs =  new SubSink();
  public search = new BehaviorSubject<ProductSearchListRequest>(new ProductSearchListRequest({
    name: ''
   }));

public productList = signal<ProductDetails[]>([]);
public productSuggestionList = signal<SuggestedList[]>([]);
public limit = signal(10);
public offset = signal(0);
public searchValue = signal('');
public count = signal(0);
constructor() { }

public _productsService = inject(ProductsService);
private _toaster = inject(ToastrService)

ngOnInit() {
 this.getProductList();
 this.searchConnectionInit();
}

 // bidirectional communication
searchConnectionInit() {
  this.subs.add(this._productsService.searchData(this.search).subscribe((data:SearchResult)=> {
    this.productSuggestionList.set(data.search ?? []);
   }));
}

getProductList() {
  const listRequest =  new ListProductRequest( {
      limit: this.limit().toString(),
      offset: this.offset().toString(),
      name: this.searchValue()
  })
  this.subs.add(this._productsService.productList(listRequest).subscribe((data:ProductListResponse)=> {
    const product =(data.products ?? []);
    this.productList.set(product);
    this.count.set(+data.count);
   }))
}

page(event: PageEvent) {
  this.limit.set(event.pageSize);
  this.offset.set(event.pageIndex * this.limit());
  this.getProductList();
}


createProduct(eventValue:Record<string,string | undefined | null | Uint8Array | number> ){
  const create = new CreateProductRequest ({
   ...eventValue
  })
  this.subs.add(this._productsService.createProduct(create).subscribe(data=> {
    this._toaster.success(data.value ?? '');
    this.getProductList();
  }));
}

editProduct(eventValue:Record<string,string | undefined | null | Uint8Array | number> ){

  const update = new UpdateProductRequest ({
   ...eventValue
  })
  this.subs.add(this._productsService.updateProduct(update).subscribe(data=> {
    this._toaster.success(data.value ?? '');
    this.getProductList();
  }));
}

deleteProduct(eventValue: string ){
  const id = new DeleteProductRequest ({
    id: eventValue
  })
  this.subs.add(this._productsService.deleteProduct(id).subscribe(data=> {
    this._toaster.success(data.value ?? '');
    this.getProductList();
  }));
}

searchFinished(event: string) {
  this.searchValue.set(event);
  this.getProductList();
}
searchProduct(name: string){
  this.search.next(new ProductSearchListRequest({
    name: name
   }));
}
ngOnDestroy () {
  this.subs.unsubscribe();
}
}
