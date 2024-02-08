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
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      // Check credentials in localStorage
      const savedUser = localStorage.getItem(email);
      if (savedUser && JSON.parse(savedUser).password === password) {
        // Successful login, move to next screen
        localStorage.setItem("isLoggedIn","true");
        alert('Login successful');
        this.router.navigate(['/navbar']);
      } else {
        localStorage.setItem("isLoggedIn","false");
        alert('Invalid credentials');
        this.router.navigate(['/sign-up-from']);
      }
    } else {
      // Handle invalid form
    }
  }


}
