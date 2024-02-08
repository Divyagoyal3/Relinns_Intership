import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  http = inject(HttpClient);
  posts : any = [];
  ngOnInit(): void {
    this.fetchpost();
  }
  fetchpost(){
    this.http.get('https://fakestoreapi.com/products?_limit=10')
    .subscribe((posts:any) =>{
      console.log(posts);
      this.posts = posts;
    })
  }
 

}
