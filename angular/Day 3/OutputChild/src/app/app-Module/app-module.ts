import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from '../employee.service';


@NgModule({
  declarations: [AppComponent,EmployeeListComponent,EmployeeDetailComponent],
  imports: [
    CommonModule,BrowserModule
  ]
})
export class YModule { }
