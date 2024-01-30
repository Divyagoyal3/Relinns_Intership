import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   title: string = 'Shoes';
   description: string ="Shoes to buuy ";
   price: number = 7000;
   ratings: number = 4.5/5 ;
  // wishlist: any[] = [];
  // cart: any[] = [];


  // addToCart() {
  //   // Add logic for adding to cart
  //   const cardDetails = {
  //     title: this.title,
  //     description: this.description,
  //     price: this.price,
  //     ratings: this.ratings
  //   };
  //   this.cart.push(cardDetails);
  //   console.log('Added to cart:', cardDetails);
  // }

  // addToWishlist() {
  //   // Add logic for adding to wishlist
  //   const cardDetails = {
  //     title: this.title,
  //     description: this.description,
  //     price: this.price,
  //     ratings: this.ratings
  //   };
  //   this.wishlist.push(cardDetails);
  //   console.log('Added to wishlist:', cardDetails);
  // }
}
