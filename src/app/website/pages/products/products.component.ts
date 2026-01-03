import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from '../../../common/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {

  categoryOpen = true;
  skinOpen = true;
  priceOpen = true;

  filterSheetOpen = false;

  priceRange = 500;

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private router: Router,
      private route: ActivatedRoute,
    private productService: ProductService
  ) {}

ngOnInit(): void {
  this.products = this.productService.getProducts();

  this.route.queryParamMap.subscribe(params => {
    const categoryParam = params.get('category');

    const selectedFromUrl = categoryParam
      ? categoryParam.split(',').map(c => decodeURIComponent(c))
      : [];

    this.categories.forEach(c => {
      c.selected = selectedFromUrl.includes(c.name);
    });

    this.applyFilters(false); // prevent URL loop
  });
}



  /* ================================
     BROCHURE CATEGORIES
  ================================= */
  categories = [
    { name: 'Pigmentation', selected: false },
    { name: 'Anti Fungals', selected: false },
    { name: 'Hair Care', selected: false },
    { name: 'Anti Acne', selected: false },
    { name: 'Dry Skin', selected: false },
    { name: 'Steroidal', selected: false },
    { name: 'Eczema / Psoriasis', selected: false },
    { name: 'Anti Allergics & Antibiotics', selected: false },
    { name: 'Anti Oxidants', selected: false },
  ];

  /* ================================
     SKIN TYPES (UNCHANGED)
  ================================= */
  skinTypes = [
    { name: 'Oily', selected: false },
    { name: 'Dry', selected: false },
    { name: 'Combination', selected: false },
    { name: 'Sensitive', selected: false },
    { name: 'Acne-Prone', selected: false }
  ];

  /* ================================
     TOGGLES
  ================================= */
  toggleCategory() { this.categoryOpen = !this.categoryOpen; }
  toggleSkin() { this.skinOpen = !this.skinOpen; }
  togglePrice() { this.priceOpen = !this.priceOpen; }

  openFilterSheet() { this.filterSheetOpen = true; }
  closeFilterSheet() { this.filterSheetOpen = false; }

  /* ================================
     FILTER LOGIC
  ================================= */
applyFilters(updateUrl: boolean = true) {
  const selectedCategories = this.categories
    .filter(c => c.selected)
    .map(c => c.name);

  const selectedSkinTypes = this.skinTypes
    .filter(s => s.selected)
    .map(s => s.name);

  this.filteredProducts = this.products.filter(product => {

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const skinMatch =
      selectedSkinTypes.length === 0 ||
      selectedSkinTypes.some(type =>
        product.skinTypes.includes(type as any)
      );

    const priceMatch = product.price <= this.priceRange;

    return categoryMatch && skinMatch && priceMatch;
  });

  /* ================================
     SYNC URL (MULTI-CATEGORY)
  ================================= */
  if (updateUrl) {
    if (selectedCategories.length > 0) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          category: selectedCategories.join(',')
        },
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { category: null },
        queryParamsHandling: 'merge'
      });
    }
  }
}



clearAllFilters() {
  this.categories.forEach(c => (c.selected = false));
  this.skinTypes.forEach(s => (s.selected = false));
  this.priceRange = 500;

  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: { category: null },
    queryParamsHandling: 'merge'
  });

  this.applyFilters(false);
}


  /* ================================
     NAVIGATION
  ================================= */
  goToDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }
}
