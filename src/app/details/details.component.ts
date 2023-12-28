import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute , private router:Router ,private empService:EmployeeserviceService) { }

  id:number|undefined;
  employee:any;

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

    this.empService.getEmployeeById(Number(this.id)).subscribe((data)=>{
      if(data){
       this.employee=data;
      }
      else{

      }

    })




  }

}
