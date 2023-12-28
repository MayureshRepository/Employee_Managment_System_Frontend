import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'empoloyee' , component:EmployeeListComponent},
  {path:'' , redirectTo:'empoloyee' , pathMatch:'full'},
  {path:'add-employee' , component:CreateEmployeeComponent},
  {path:'update/:id' ,component:UpdateEmployeeComponent},
  {path:'details/:id' ,component:DetailsComponent},
  {path:'error' ,component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
