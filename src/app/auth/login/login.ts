import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (!this.email || !this.password) {
      alert("Please enter both fields");
      return;
    }

    this.router.navigate(['/home']);
  }
}
