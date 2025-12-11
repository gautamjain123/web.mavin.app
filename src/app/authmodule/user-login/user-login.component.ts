import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  user = {
    email: '',
    password: ''
  };

  login() {
    console.log("User Login:", this.user);
  }

  loginWithGoogle() {
    console.log("Google Login Clicked");
  }

  goToSignup() {
    console.log("Navigate to Signup");
  }
}
