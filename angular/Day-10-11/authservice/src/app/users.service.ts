
// user.service.ts
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    new User('user1', 'password1'),
    new User('user2', 'password2')
    // Add more users as needed
  ];

  getUserByUsername(username: string ,password: any): User | undefined {
    return this.users.find(user => user.username === username  && user.password === password);
  }
}

