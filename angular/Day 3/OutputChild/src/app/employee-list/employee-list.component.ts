import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Iemployee } from '../employee';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
`,
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  public employees: Iemployee[] =[];
  constructor(private _employeeService :EmployeeService){}
  ngOnInit()
  {
    this.employees = this._employeeService.getemployees();
  }
}
