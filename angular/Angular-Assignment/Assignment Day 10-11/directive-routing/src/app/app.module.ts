import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    HostListenerComponent,
    NgSwitchComponent,
    NgContainerComponent,
    RouteParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
