import { Component ,OnInit} from '@angular/core';
import { Iemployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>   
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}}</li>
    </ul>
  `,
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {
  public employees: Iemployee[] =[];
  constructor(private _employeeService :EmployeeService){}
  ngOnInit()
  {
    this.employees = this._employeeService.getemployees();
  }
}
