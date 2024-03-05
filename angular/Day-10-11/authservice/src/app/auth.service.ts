// auth.service.ts
import { Injectable, inject } from '@angular/core';
import { UserService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn  = false;
  router: any;
  UserService : UserService = inject(UserService);



    login(username: string, password: string): any {
    // In a real application, you would typically make an HTTP request to a server to authenticate the user.
    // For this example, let's assume a simple authentication with hardcoded credentials.

    const user = this.UserService.getUserByUsername(username,password);
    if (user === undefined) {
      this.isLoggedIn = false;
     
    } else {
      this.isLoggedIn = true;
    }
    return user;
  }

  logout(): void {
    // Clear authentication status and navigate to login page
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
