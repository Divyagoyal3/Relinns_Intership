import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { TopHeaderComponent } from './app/top-header/top-header.component';
import { MainMenuComponent } from './app/header/main-menu/main-menu.component';
import { TopMenuComponent } from './app/header/top-menu/top-menu.component';
import { SearchComponent } from './app/product-list/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    MainMenuComponent,
    TopMenuComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
