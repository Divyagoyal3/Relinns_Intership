import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BookService} from './book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './app/landing/testdata'; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
