import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
 @Input() value:string = 'Divya Goyal';

 constructor()
 {
  console.log("first tym called");
  console.log(this.value);
 }
// ngOnDestroy(): void {
//     throw new Error('Method not implemented.');
//   }

ngOnInit()
 {
  console.log("NgOnInit Called");
  console.log(this.value);
 }
ngOnChanges(changes: SimpleChanges): void {
   console.log("ngOnChanges Called");
   console.log(changes);
 }
ngDoCheck(){
  console.log("Do Changes :ngDoCheck Called");
}
ngAfterContentInit(){
  console.log("Do Changes :ngAfterContentInit");
}
ngAfterContentChecked(): void {
  console.log("Do Changes :ngAfterContentChecked Called");
}
ngAfterViewInit()
{
  console.log("Do Changes :ngAfterViewInit");
}
ngAfterViewChecked(): void {
  console.log("Do Changes :ngAfterViewChecked Called");
}
}
