import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  allEmployeeGetter() : Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:9500/employees/all');   
}

singleEmployeeGetter(id:string) : Observable<Employee>{
return this.http.get<Employee>('http://localhost:9500/products/single-employee',{
  headers: {
    code : id
  }
});
}

searchEmployeeGetter(criteria:string) : Observable<Employee[]>{
return this.http.get<Employee[]>('http://localhost:9500/products/search-employee',{
  headers: {
    employeeName : criteria
  }
});
}
}
