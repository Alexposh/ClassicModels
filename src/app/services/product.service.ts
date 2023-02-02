import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  allProductsGetter() : Observable<Product[]>{
    // let arr : any[]= [];
    return this.http.get<Product[]>('http://localhost:9500/products/all');

    // return arr;
  }

  // products/single-product/30/car
  // @PathVariable("id")
  // products/single-product?code=30&name=car
  // request.getParameter("code");

  singleProductGetter(id:string) : Observable<Product>{
    return this.http.get<Product>('http://localhost:9500/products/by-id?code='+id);
  }

  singleProductGetter2(id:string) : Observable<Product>{
    return this.http.get<Product>(`http://localhost:9500/products/by-id-2/${id}`);
  }


  searchProductGetter(criteria:string) : Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:9500/products/search-product/${criteria}`);
  }
  productsByProductLine(productLineName: string): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:9500/products/by-product-line/${productLineName}`);
  }
}
