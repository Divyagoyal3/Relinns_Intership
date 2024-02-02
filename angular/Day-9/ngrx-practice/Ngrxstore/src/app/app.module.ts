// app.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './state/counter/counter.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  // Other module configurations
  bootstrap: [AppComponent] // Specify your root component to bootstrap
})
export class AppModule { }


