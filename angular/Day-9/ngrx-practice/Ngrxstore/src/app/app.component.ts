// my-component.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState, counterReducer } from './state/counter/counter.reducer';
import * as CounterActions from  './state/counter/counter.action'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // imports: [AsyncPipe]
})
export class AppComponent implements OnInit {
  title = 'Ngrxstore';
  count$: Observable<CounterState> = this.store.select('counter');
  
    constructor(private store: Store<{ counter: CounterState }>) {}
  
    ngOnInit() {
      this.count$ = this.store.pipe(select('counter'));
      console.log(this.count$);
    }
  
  
    increment() {
      this.store.dispatch(CounterActions.increment());
    }
  
    decrement() {
      this.store.dispatch(CounterActions.decrement());
    }
  
    reset() {
      this.store.dispatch(CounterActions.reset());
    }
  }








 






