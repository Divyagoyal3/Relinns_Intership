import { Component, OnInit, inject } from '@angular/core';
// import { authGuard } from '../../auth.guard';
import { HttpClient } from '@angular/common/http';
// import { LoginPageComponent } from '../../pages/Loginpage/login-page/login-page.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment,decrement,reset } from '../../state/counter/counter.action';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  http = inject(HttpClient);
  posts : any = [];
  public savedUserId:any;
  countProduct :number =0;
  count$: any;
  

  constructor(private store: Store<{ count: number }>,private router:Router) {
    // = store.select('count');
    store.select('count').subscribe(val => {
       this.count$ = val;
      console.log(this.count$.count)
    });
  }

  ngOnInit(): void {
    this.fetchpost();
  }
  fetchpost(){
    this.http.get('https://fakestoreapi.com/products')
    .subscribe((posts:any) =>{
      // console.log(posts);
      this.posts = posts;
    })
  }
  
  onclick(){
    this.router.navigate(['login-page']);
  }
  
  onclickToCart(){
    this.router.navigate(['cart']);
  }

  
  
 
  addToCart(cardItem:any, countProductItem :number){
    console.log(CanvasCaptureMediaStreamTrack);
    let savedUser = localStorage.getItem('userId');
    console.log(savedUser)
    if (savedUser) {
      const jsonObject = JSON.parse(savedUser);
      const email = jsonObject.email;
      const password = jsonObject.password;
    
    // const storedPassword = localStorage.getItem('password');

    if(email && password){
      console.log("Hi");
      localStorage.setItem('cards',JSON.stringify(cardItem));
       this.countProduct++;
      // this.increment();
    //   let 
    //  this.router.navigate(['cart']);
      
    }
  }
    else{
      alert("Please Login First");
      this.router.navigate(['login-page']);
    }

  }


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
}

 

