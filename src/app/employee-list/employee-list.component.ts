import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor( private employeeService:EmployeeserviceService , private http:HttpClient ,private router:Router) { }

  employeedata:any|undefined;
  deleteUrl="http://localhost:8080/api/v1/employees";
  getDetailsURL=""
  


  ngOnInit(): void {

    this.getEmployeeData();
  

  }


  getEmployeeData(){
    this.employeeService.getEmployeeDetails().subscribe((data:any)=>{
      console.log(data);
      this.employeedata = data;
    })
  }

  details(id:number){
    try{


    }
    catch(error){
      console.log(error);
      this.router.navigate(['/error']);
    }

  }

  delete(id:number){
    console.log("Delete id",id);
    

    try{
      this.http.delete(`${this.deleteUrl}/${id}`).subscribe((data:any)=>{
        console.log("delete ",data);
        // alert( ` ID : ${id} deleted `);
        if(data){
          this.getEmployeeData();
     }
     else{
       this.router.navigate(['/error']);
     }
      })

    }
    catch(err){
      console.log(err);
    }

  }


}


