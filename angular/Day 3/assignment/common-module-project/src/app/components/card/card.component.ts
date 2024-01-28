import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = 'Shoes';
  @Input() price: number = 7000;
  @Input() ratings: number = 4.5/5 ;
  wishlist: any[] = [];
  cart: any[] = [];


  addToCart() {
    // Add logic for adding to cart
    const cardDetails = {
      title: this.title,
      price: this.price,
      ratings: this.ratings
    };
    this.cart.push(cardDetails);
    console.log('Added to cart:', cardDetails);
  }

  addToWishlist() {
    // Add logic for adding to wishlist
    const cardDetails = {
      title: this.title,
      price: this.price,
      ratings: this.ratings
    };
    this.wishlist.push(cardDetails);
    console.log('Added to wishlist:', cardDetails);
  }
}
