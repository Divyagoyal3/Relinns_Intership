import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { increment,decrement,reset } from '../../../state/counter/counter.action';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  public savedUserId:any;
  checkCart: any = localStorage.getItem('isSignedUp');
  isLoggedIn: any = localStorage.getItem('isLoggedIn');
  count$: any;
  

  constructor(private store: Store<{ count: number }>,private router:Router) {
    // = store.select('count');
    store.select('count').subscribe(val => {
       this.count$ = val;
      console.log(this.count$.count)
    });
  }

  ngOnInit(){
    this.cartBtn();
    this.addToCart();
  }

  
  addToCart(){
    let savedUser = localStorage.getItem('userId');
    console.log(savedUser)
    if (savedUser) {
      const jsonObject = JSON.parse(savedUser);
      const email = jsonObject.email;
      const password = jsonObject.password;
    
   

    if(email && password){
      console.log("Hi");
      // this.router.navigateByUrl(home-page\cart');
      localStorage.getItem('cards');
      this.increment();
      
    }
  } else{
    this.router.navigate(['login-page']);
  }}

  login(){
    let savedUser = localStorage.getItem('userId');
    console.log(savedUser)
    if (savedUser) {
      const jsonObject = JSON.parse(savedUser);
      const email = jsonObject.email;
      const password = jsonObject.password;
      if(email && password){
      console.log("Hi");
      this.router.navigateByUrl('/navbar');
            this.router.navigate(['card']);
          } 
  } else{
    alert('Please login first');
    this.router.navigate(['login-page']);
  }}
  increment() {
    console.log('inside increment')
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  
  cartBtn() {
    if (this.checkCart == 'false') {
      console.log(this.checkCart);
      localStorage.setItem('checkCart','false');
    } else {
      alert('Already Logged In');
      this.router.navigate(['/card']);
    }
  }

  onLogout(){
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['login-page']);
  }
  
}
