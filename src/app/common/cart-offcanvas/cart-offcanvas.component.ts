import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartserviceService, CartItem } from '../services/cartservice.service';
import { RouterLink } from "@angular/router";
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-offcanvas',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cart-offcanvas.component.html',
  styleUrl: './cart-offcanvas.component.scss'
})
export class CartOffcanvasComponent implements OnInit {

  isOpen = false;
  cart: CartItem[] = [];
  isSending = false;
  showCheckoutPopup = false;
  orderConfirmed = false;

  userEmail = '';
  userPhone = '';

  checkoutStep = 1; // 1 = user details, 2 = order summary

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
     POPUP CONTROL
  ===================== */

  openCheckoutPopup() {
    this.showCheckoutPopup = true;
    this.orderConfirmed = false;
    this.checkoutStep = 1;
  }

  closeCheckoutPopup() {
    this.showCheckoutPopup = false;
  }

  /* =====================
     STEP 1 → STEP 2
  ===================== */

  proceedToSummary() {

    if (!this.userEmail || !this.userPhone) {
      alert("Please enter email and mobile number");
      return;
    }

    this.checkoutStep = 2;
  }

  /* =====================
     CONFIRM ORDER
  ===================== */

confirmOrder() {

  this.isSending = true;

  const orderId = Math.floor(100000 + Math.random() * 900000);

  const orders = this.cart.map(item => ({
    name: item.name,
    units: item.qty,
    price: item.price * item.qty
  }));

  const templateParams = {
    email: 'gautamjain6183@gmail.com',
    customer_email: this.userEmail,
    customer_phone: this.userPhone,
    order_id: orderId,
    orders: orders,
    cost: {
      shipping: 0,
      tax: 0,
      total: this.totalAmount
    }
  };

  emailjs.send(
    'service_k1dsae3',
    'template_tfzp4ba',
    templateParams,
    'FLXax255b7VI1MKu0'
  )
  .then(() => {

    this.isSending = false;
    this.orderConfirmed = true;

    this.cartService.clearCart();

    setTimeout(() => {
      this.close();
    }, 2000);

  })
  .catch(err => {

    this.isSending = false;

    console.error('Email sending failed:', err);
  });

}

  /* =====================
     TOTAL
  ===================== */

  get totalAmount() {
    return this.cartService.getTotalAmount();
  }

}