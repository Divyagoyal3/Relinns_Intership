import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component'; 
import { NgContainerComponent } from './ng-container/ng-container.component';

const routes: Routes = [
  { path: 'host-listener', component: HostListenerComponent },
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'ng-container', component: NgContainerComponent },
  { path: 'route-parameters/:id', component: RouteParametersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
