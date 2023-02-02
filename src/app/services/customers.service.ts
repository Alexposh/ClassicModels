import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customers';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  allCustomersGetter() : Observable<Customer[]>{
        return this.http.get<Customer[]>('http://localhost:9500/customers/all');   
  }

  singleCustomerGetter(id:string) : Observable<Customer>{
    return this.http.get<Customer>('http://localhost:9500/products/single-customer',{
      headers: {
        code : id
      }
    });
  }

  searchCustomerGetter(criteria:string) : Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:9500/products/search-customer',{
      headers: {
        customerName : criteria
      }
    });
  }
}
