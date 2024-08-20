import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password:  string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        const role = this.authService.getUserRole();
        if(role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (role === 'user') {
          this.router.navigate(['/user']);
        } else {
          this.router.navigate(['/not-found']);
        }
      } else {
        this.loginError = true;
      }
    });
  }
}
