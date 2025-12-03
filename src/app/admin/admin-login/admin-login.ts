import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (!this.email || !this.password) {
      alert("Please enter both fields");
      return;
    }

    this.router.navigate(['/home1']);
  }
}
