import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartOffcanvasComponent } from "../cart-offcanvas/cart-offcanvas.component";

@Component({
  selector: 'app-website-header',
  standalone: true,
  imports: [RouterModule, CommonModule, CartOffcanvasComponent],
  templateUrl: './website-header.component.html',
  styleUrl: './website-header.component.scss'
})
export class WebsiteHeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30;
  }


  @ViewChild(CartOffcanvasComponent) cart!: CartOffcanvasComponent;

  openCart() {
    this.cart.open();
  }
menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

closeMenu() {
  this.menuOpen = false;
}
}
