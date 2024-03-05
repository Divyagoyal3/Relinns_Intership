import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/Loginpage/login-page/login-page.component';
import { SignUpFromComponent } from './pages/Loginpage/sign-up-from/sign-up-from.component';
import { NavbarComponent } from './pages/Loginpage/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './home-page/card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './home-page/carousel/slider/slider.component';

import { FooterComponent } from './home-page/footer/footer/footer.component';
import { CartComponent } from './home-page/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpFromComponent,
    NavbarComponent,
    CardComponent,
    SliderComponent,
    CartComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot({ count: counterReducer }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
