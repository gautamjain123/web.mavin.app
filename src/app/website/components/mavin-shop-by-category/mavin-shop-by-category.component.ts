import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mavin-shop-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mavin-shop-by-category.component.html',
  styleUrl: './mavin-shop-by-category.component.scss'
})
export class MavinShopByCategoryComponent {
    constructor(private router: Router) {}
  
    products = [
    { id: 1, name: 'Maviderm', description: 'A gentle yet effective cleanser that removes impurities.', price: 29.99, image: '../../../../assets/images/mavin.png' },
    { id: 2, name: 'Hydra Boost Serum', description: 'Deep hydration infused with hyaluronic acid.', price: 45.50, image: '../../../../assets/images/cat-serum.png' },
    { id: 3, name: 'Detox Glow Mask', description: 'A purifying clay mask that refines pores.', price: 34.00, image: '../../../../assets/images/cat-mask.png' },
    { id: 4, name: 'Renewal Daily Moisturizer', description: 'Keeps your skin nourished all day.', price: 38.75, image: '../../../../assets/images/cat-mask.png' },
  ];

    goToDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }
}
