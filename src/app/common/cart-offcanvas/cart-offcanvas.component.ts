import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-offcanvas.component.html',
  styleUrl: './cart-offcanvas.component.scss'
})
export class CartOffcanvasComponent {
    isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
