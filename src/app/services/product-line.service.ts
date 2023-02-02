import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductLine } from '../models/product-line';

@Injectable({
  providedIn: 'root'
})
export class ProductLineService {

  constructor(private http: HttpClient) { }
  allProductLinesGetter() : Observable<ProductLine[]>{
  
    return this.http.get<ProductLine[]>('http://localhost:9500/productlines/all');

  }
}
