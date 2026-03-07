import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private cartKey = 'app_cart';
  private isBrowser: boolean;

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.cartSubject.next(this.loadCart());
    }
  }

  /* ======================
     CART OPERATIONS
  ====================== */

  addToCart(product: any) {
    const cart = [...this.cartSubject.value];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || '',
        qty: 1
      });
    }

    this.updateCart(cart);
  }

  increaseQty(itemId: number) {
    const cart = [...this.cartSubject.value];
    const item = cart.find(i => i.id === itemId);
    if (item) item.qty++;
    this.updateCart(cart);
  }

  decreaseQty(itemId: number) {
    let cart = [...this.cartSubject.value];
    const item = cart.find(i => i.id === itemId);

    if (!item) return;

    if (item.qty > 1) {
      item.qty--;
    } else {
      cart = cart.filter(i => i.id !== itemId);
    }

    this.updateCart(cart);
  }

  clearCart() {
    this.updateCart([]);
  }

  /* ======================
     HELPERS
  ====================== */

  getTotalAmount(): number {
    return this.cartSubject.value.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }

  /* ======================
     STORAGE
  ====================== */

  private updateCart(cart: CartItem[]) {
    this.cartSubject.next(cart);

    if (this.isBrowser) {
      localStorage.setItem(this.cartKey, JSON.stringify(cart));
    }
  }

  private loadCart(): CartItem[] {
    if (!this.isBrowser) return [];
    const data = localStorage.getItem(this.cartKey);
    return data ? JSON.parse(data) : [];
  }

  getCartCount(): number {
  return this.cartSubject.value.reduce((sum, item) => sum + item.qty, 0);
}
  clearCartdata() {
  this.cartSubject.next([]);
}
}
