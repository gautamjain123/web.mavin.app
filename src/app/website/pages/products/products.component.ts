import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../../common/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  categoryOpen = true;
  skinOpen = true;
  priceOpen = true;

  filterSheetOpen = false;

  priceRange = 50;
    products: Product[] = [];

  constructor(private router: Router,private productService: ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  categories = [
    { name: 'Cleansers', selected: false },
    { name: 'Serums', selected: false },
    { name: 'Masks', selected: false },
    { name: 'Moisturizers', selected: false },
    { name: 'Sunscreen', selected: false }
  ];

  skinTypes = [
    { name: 'Oily', selected: false },
    { name: 'Dry', selected: false },
    { name: 'Combination', selected: false },
    { name: 'Sensitive', selected: false },
    { name: 'Acne-Prone', selected: false }
  ];

  toggleCategory() { this.categoryOpen = !this.categoryOpen; }
  toggleSkin() { this.skinOpen = !this.skinOpen; }
  togglePrice() { this.priceOpen = !this.priceOpen; }

  openFilterSheet() { this.filterSheetOpen = true; }
  closeFilterSheet() { this.filterSheetOpen = false; }

  clearAllFilters() {
    this.categories.forEach(c => c.selected = false);
    this.skinTypes.forEach(s => s.selected = false);
    this.priceRange = 10;
  }

  goToDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

}
