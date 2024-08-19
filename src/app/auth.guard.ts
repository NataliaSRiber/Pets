import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const  userRole = authService.getUserRole();
  const requiredRole = route.data['role'];

  if (userRole === requiredRole) {
    return true;
  } else {
    router.navigate(['/notfound']);
    return false;
  }
}


