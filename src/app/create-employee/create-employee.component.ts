import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private http:HttpClient , private router:Router) { }

  private baseUrl = "http://localhost:8080/api/v1/addEmployee";

  employees : Employee = new Employee();

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employees)
    return this.http.post(`${this.baseUrl}`,this.employees).subscribe((data:any)=>{
      if(data){
           this.router.navigate(['/']);
      }
      else{
        this.router.navigate(['/error']);
      }
    });

  }

}
