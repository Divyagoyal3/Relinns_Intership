import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm: FormGroup;
  public savedUser :any =" ";
  isLogged :boolean =false;


    constructor(private router: Router) {
    localStorage.setItem("isLoggedIn","false");
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    }

  onSubmit() {
    if (this.loginForm.valid) {
      // Code to handle login authentication
      const savedUser = localStorage.getItem('userId');
      const myEmail=this.loginForm.value.email;
     const myPassword=this.loginForm.value.password;     
      // Check credentials in localStorage
      if (savedUser) {
        const jsonObject = JSON.parse(savedUser);
        const email = jsonObject.email;
        const password = jsonObject.password;
        console.log(jsonObject.email);
      if ( myEmail===email && myPassword===password) {
        // Successful login, move to next screen
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("isSignedUp","true");
        alert('Login successful');
        this.router.navigate(['/navbar']);
      } 
    }else {
        
        localStorage.setItem("isLoggedIn","false");
        localStorage.setItem("isSignedUp","false");
        
        if(this.isLogged){
          alert(" Please Login in Correctly");
        }else{
          alert("Register First");
          this.router.navigate(['/sign-up-from']);
        }
        
      }
    }
  }
}
