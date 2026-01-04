import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartserviceService, CartItem } from '../services/cartservice.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart-offcanvas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-offcanvas.component.html',
  styleUrl: './cart-offcanvas.component.scss'
})
export class CartOffcanvasComponent implements OnInit {

  isOpen = false;
  cart: CartItem[] = [];

  constructor(private cartService: CartserviceService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  /* =====================
     OFFCANVAS CONTROL
  ===================== */

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  /* =====================
     CART ACTIONS
  ===================== */

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item.id);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item.id);
  }

  /* =====================
     TOTAL
  ===================== */

  get totalAmount() {
    return this.cartService.getTotalAmount();
  }
}
