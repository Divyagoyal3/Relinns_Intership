import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/Loginpage/login-page/login-page.component';
import { SignUpFromComponent } from './pages/Loginpage/sign-up-from/sign-up-from.component';
import { NavbarComponent } from './pages/Loginpage/navbar/navbar.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'navbar' , component :NavbarComponent,canActivate:[authGuard]},
  { path: 'sign-up-from', component: SignUpFromComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
