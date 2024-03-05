import { Component } from '@angular/core';
import { Observable, observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Observable';
  observable = new Observable ((observe: { next: (arg0: string) => void; complete: (arg0: string) => void; }) =>{
    setTimeout(()=>{observe.next("1")},2000);
    setTimeout(()=>{observe.next("2")},4000);
    setTimeout(()=>{observe.complete("1completed")},5000);
  });

  ngOnInit(){
    this.observable.subscribe((val: any)=>{
      console.log(val);
    },() =>{
    alert("Observer");
    }
    )
  }
}
