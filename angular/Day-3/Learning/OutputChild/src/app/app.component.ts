import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OutputChild';

  greet(name:string)
  {
    alert("Hello" +name);
  }

  constructor(ts:EmployeeService)
  {
    ts.callMockapi();
  }
}
