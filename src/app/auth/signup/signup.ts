import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  onSignup() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      name: this.name,
      email: this.email,
      password: this.password
    }));

    alert("Signup successful!");

    
  }
  logout() {
    window.location.href = '/admin-login';
    }
}
