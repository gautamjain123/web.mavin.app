import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from '../../../common/services/product.service';
import { CartItem, CartserviceService } from '../../../common/services/cartservice.service';

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
  product!: Product;
  filterSheetOpen = false;
  priceRange = 500;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: CartItem[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartserviceService

  ) { }

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


    // ✅ Get product directly from service
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
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

addToCart(product: any, imgEl: HTMLImageElement, event: MouseEvent) {
  event.stopPropagation(); // prevents card click
  this.animateFlyToCart(imgEl);
  this.cartService.addToCart(product);
}


  animateFlyToCart(imgEl: HTMLImageElement) {
    const cart = document.getElementById('cart-icon');
    if (!cart) return;

    const imgRect = imgEl.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    // Clone image
    const clone = imgEl.cloneNode(true) as HTMLImageElement;
    clone.classList.add('flying-img');

    clone.style.top = imgRect.top + 'px';
    clone.style.left = imgRect.left + 'px';
    clone.style.width = imgRect.width + 'px';
    clone.style.height = imgRect.height + 'px';

    document.body.appendChild(clone);

    // Trigger animation
    requestAnimationFrame(() => {
      clone.style.top = cartRect.top + 'px';
      clone.style.left = cartRect.left + 'px';
      clone.style.width = '20px';
      clone.style.height = '20px';
      clone.style.opacity = '0.5';
      clone.style.transform = 'scale(0.2)';
    });

    // Remove after animation
    setTimeout(() => {
      clone.remove();
    }, 700);
  }

}
