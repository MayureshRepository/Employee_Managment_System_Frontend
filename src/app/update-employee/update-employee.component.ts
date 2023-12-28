import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeSer :EmployeeserviceService,private route: ActivatedRoute ,private http:HttpClient ,private router:Router) { }

  employees : Employee = new Employee();
  selectedEmployee:any;
  employeedata:any;
  putUrl ="http://localhost:8080/api/v1/employees"
  placeholder:any;
  id:number | undefined;
  ngOnInit(): void {

    //const employeeId = this.route.snapshot.paramMap.get('id');
    this.id = this.route.snapshot.params['id'];

    this.employeSer.getEmployeeById(Number(this.id)).subscribe((data)=>{
      if(data){
       this.employees = data;
      }else{
        console.log("Emp from update no data");
      }
    })


  
  }

  onUpdate(){
    console.log("Emp from update",this.employees);

try {
   this.http.put(`${this.putUrl}/${this.employees.id} ` ,this.employees ).subscribe((data)=>{
    if(data){
      console.log("Emp onUpdate",data);
      this.router.navigate(['/']);
    }else{
      console.log("Emp onUpdate no data");
      this.router.navigate(['/error']);
    }
  
  });
} catch (error) {
  console.log("error is from",error);
  this.router.navigate(['/error']);
}
   

}


}