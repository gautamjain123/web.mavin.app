import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Product,
  ProductCategory,
  ProductService
} from '../../../common/services/product.service';

@Component({
  selector: 'app-mavin-shop-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mavin-shop-by-category.component.html',
  styleUrl: './mavin-shop-by-category.component.scss'
})
export class MavinShopByCategoryComponent implements OnInit {

  categories: ProductCategory[] = [];
  topProducts: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // ✅ All brochure categories (with images)
    this.categories = this.productService.getAllCategories();

    // ✅ Top 4 products
    this.topProducts = this.productService.getProducts().slice(0, 4);
  }

  goToDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  goToCategory(category: Product['category']) {
    this.router.navigate(['/products'], {
      queryParams: { category }
    });
  }
}
