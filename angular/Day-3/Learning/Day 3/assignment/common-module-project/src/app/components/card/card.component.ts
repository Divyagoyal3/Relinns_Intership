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
}
