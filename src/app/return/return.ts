import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return',
  imports: [CommonModule, FormsModule],
  templateUrl: './return.html',
  styleUrl: './return.css',
})
export class Return {
 borrowedBooks: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const book = localStorage.getItem("borrowedBook");

    if (book) {
      this.borrowedBooks = [JSON.parse(book)];
    }
  }

  returnBook() {
    alert("Book returned successfully!");

    localStorage.removeItem("borrowedBook");
    this.borrowedBooks = [];

  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
