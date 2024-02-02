import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
  getemployees()
  {
    return [
      {"id":1 ,"name":"Divya Goyal"},
      {"id":2 ,"name":"Garima Goyal"}
    ];
  }
  callMockapi()
  {
    console.warn("Divya is calling by a function from employeesrvice");
  }
}
