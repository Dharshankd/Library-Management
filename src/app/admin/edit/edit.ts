import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
 book: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const b = localStorage.getItem("borrowedBook");
    if (b) {
      this.book = JSON.parse(b);
    }
  }

  onEdit() {
    alert("Edit button clicked!");
  }

  onSave() {
    alert("Save button clicked!");
  }

  onUpdate() {
    alert("Update button clicked!");
  }

  goBack() {
    this.router.navigate(['/home1']);
  }
}
