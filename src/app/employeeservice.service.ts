import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private baseUrl="http://localhost:8080/api/v1/employees";
  
  constructor(private http:HttpClient) { }




  getEmployeeDetails():Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  getEmployeeById(id:Number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)

  }
}

