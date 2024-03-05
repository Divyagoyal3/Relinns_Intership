import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/Loginpage/login-page/login-page.component';
import { SignUpFromComponent } from './pages/Loginpage/sign-up-from/sign-up-from.component';
import { NavbarComponent } from './pages/Loginpage/navbar/navbar.component';
import { authGuard } from './auth.guard';
import { CartComponent } from './home-page/cart/cart.component';




const routes: Routes = [
  { path: '', redirectTo: 'navbar', pathMatch: 'full' },
  { path: 'navbar' , component :NavbarComponent},
  { path: 'login-page', component: LoginPageComponent,canActivate:[authGuard] },
  { path: 'sign-up-from', component: SignUpFromComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
