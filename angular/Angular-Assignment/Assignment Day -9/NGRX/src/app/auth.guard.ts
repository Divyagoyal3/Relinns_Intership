import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  let isLoggedIn =localStorage.getItem("isLoggedIn");
  let router = inject(Router);
  if(isLoggedIn == 'false'){
    alert("Not Authenticated User");
    router.navigate(['/login-page']);
    return false;
  }
  return true;
};
