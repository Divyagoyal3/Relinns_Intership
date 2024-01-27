import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Output() GreetEvent = new EventEmitter();
 name = "Divya goyal";

 callParentGreet()
 {
  this.GreetEvent.emit(this.name);
 }
}
