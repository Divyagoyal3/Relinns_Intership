import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forms';
  defaultCountry='india';
  firstname:string  =  '';
  lastname:string  =  '';
  defaultGender ="Male";


  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]
  onSubmit(form:NgForm)
  {
    console.log("Form submit");
    console.log(form);
  }
}
