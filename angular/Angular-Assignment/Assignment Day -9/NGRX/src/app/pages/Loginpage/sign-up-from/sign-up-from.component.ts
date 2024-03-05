import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up-from',
  templateUrl: './sign-up-from.component.html',
  styleUrl: './sign-up-from.component.css'
})
export class SignUpFromComponent {
  signupForm: FormGroup;
 

  constructor(private router: Router) {
    this.signupForm = new FormGroup({
      email:  new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')
      ])
    });
  }


  onSubmit() {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      // Storing data in localStorage
      localStorage.setItem("isSignedUp","true");
      localStorage.setItem("userId", JSON.stringify(userData));
      // Clearing the form after successful submission
      this.signupForm.reset();
      alert('Signup successful');
      this.router.navigate(['/login-page']);
    } else {
      // Handling invalid form
      alert('Invalid form');
      localStorage.setItem("isSignedUp","false");
    }
  }
 

}
