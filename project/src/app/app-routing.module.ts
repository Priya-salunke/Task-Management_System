import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { LeaveapplicationComponent } from './leaveapplication/leaveapplication.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ManagetaskComponent } from './managetask/managetask.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:"",component:AppComponent},
  //{path:'appcomponent',component:AppComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'userregistration',component:UserregistrationComponent},
  {path:'employeedashboard',component:EmployeedashboardComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'assigntask',component:AssigntaskComponent},
  {path:'createtask',component:CreatetaskComponent},
  {path:'leaveapplication',component:LeaveapplicationComponent},
  {path:'tasklist',component:TasklistComponent},
  {path:'managetask',component:ManagetaskComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
