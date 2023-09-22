
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { ManagetaskComponent } from './managetask/managetask.component';
import { LeaveapplicationComponent } from './leaveapplication/leaveapplication.component';
import { TasklistComponent } from './tasklist/tasklist.component';

 

@NgModule({
  declarations: [
    AppComponent,
   UserloginComponent,
   UserregistrationComponent,
   AdmindashboardComponent,
   EmployeedashboardComponent,
   AssigntaskComponent,
   CreatetaskComponent,
   ManagetaskComponent,
   LeaveapplicationComponent,
   TasklistComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
