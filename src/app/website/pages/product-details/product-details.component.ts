import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../../common/services/product.service';
import { CartserviceService } from '../../../common/services/cartservice.service';
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  selectedImage = '';
  activeTab: 'desc' | 'ingredients' | 'usage' = 'desc';
  cart: CartItem[] = [];
  isOpen = false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartserviceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // ✅ Get product directly from service
    const foundProduct = this.productService.getProductById(id);

    if (foundProduct) {
      this.product = foundProduct;
      this.selectedImage = this.product.images[0];
    }
      this.cartService.cart$.subscribe(cart => {
    this.cart = cart;
  });
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }
    addToCart() {
  this.cartService.addToCart(this.product);
}


}
