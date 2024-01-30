import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Reactiveform';
  reactiveForm : FormGroup;
    ngOnInit() {
      this.reactiveForm = new FormGroup({ 
        personalDetails :new FormGroup({
          firstname : new FormControl('',Validators.required),
          lastname :  new FormControl('',Validators.required),
          email :  new FormControl('',[Validators.required,Validators.email]),
      }),
      
        gender :  new FormControl('Male'),
        country :  new FormControl(''),
        hobbies :  new FormControl(''),
      });
      
    }

    onSubmit()
    {
      console.log(this.reactiveForm);
    }
}
