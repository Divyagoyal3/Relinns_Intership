import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducerComponent } from './components/producer/producer.component';
import { ConsumerComponent } from './components/consumer/consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducerComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
