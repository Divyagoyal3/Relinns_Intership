import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  public getsJsonvalue:any;
  public postJsonvalue:any;
  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void {
    this.getMethod();
  }
  public getMethod(){
    // end point
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data)=>{
      console.log(data);
    });
  }

}
