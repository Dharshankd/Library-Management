import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  books = [
  {
      id: 1,
      title: "Success",image: "Assets/pic1.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 2,title: "Devil dairy",image: "Assets/pic2.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 3,title: "Hell Fire",image: "Assets/pic3.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 4,title: "It",image: "Assets/pic4.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 5,title: "Emma",image: "Assets/pic5.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id:6,title: "Dune",image: "Assets/pic6.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 7,title: "Fate",image: "Assets/pic7.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 8,title: "Beloved",image: "Assets/pic8.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 9,title: "Momo",image: "Assets/pic9.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 10,title: "Home",image: "Assets/pic10.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 11,title: "Wasp",image: "Assets/pic11.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    {
      id: 12,title: "Siddhartha",image: "Assets/pic12.jpg",description: "For a young lawyer on the make...",inStock: true
    },
    
    
  ];

  filteredBooks = [...this.books];

  constructor(private router: Router) {}

  get inStockCount() {
    return this.books.filter(b => b.inStock).length;
  }

  get outOfStockCount() {
    return this.books.filter(b => !b.inStock).length;
  }

  setFilter(type: string) {
    if (type === 'all') {
      this.filteredBooks = this.books;
    } else if (type === 'instock') {
      this.filteredBooks = this.books.filter(b => b.inStock);
    } else if (type === 'out') {
      this.filteredBooks = this.books.filter(b => !b.inStock);
    }
  }

  borrowBook(book: any) {
    localStorage.setItem("borrowedBook", JSON.stringify(book));

    this.router.navigate(['/return']);
  }
}
