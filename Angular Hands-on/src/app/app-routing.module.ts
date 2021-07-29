import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { LoginComponent } from './login/login.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { AuthGuard } from './auth.guard';

//Defining the routes array.
const routes: Routes = 
[
  {path:'',component:FirstComponentComponent},
  {path:'home',component:FirstComponentComponent},
  {path:'increment',component:QuantityIncrementComponent},
  {path:'viewemployee',component:ViewEmpComponent},
  {path:'editemployee_tdf',component:EditEmpTemplateDrivenComponent},
  {path:'editemployee_rcf',component:EditEmpReactiveComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'edit-emp-reactive/:id',component: EditEmpReactiveComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
