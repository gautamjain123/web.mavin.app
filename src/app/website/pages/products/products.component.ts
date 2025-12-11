import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
    categoryOpen = true;
  skinOpen = true;
  priceOpen = true;

  priceRange = 50;
  constructor(private router: Router) {}
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

  products = [
    {
      id : 1 ,
      name: 'Radiant Revitalizing Cleanser',
      description: 'A gentle yet effective cleanser that removes impurities.',
      price: 29.99,
      image: '../../../../assets/images/mavin.png'
    },
    {
      id:2,
      name: 'Hydra Boost Serum',
      description: 'Deep hydration infused with hyaluronic acid.',
      price: 45.50,
      image: '../../../../assets/images/cat-serum.png'
    },
    {
      id:3,
      name: 'Detox Glow Mask',
      description: 'A purifying clay mask that refines pores.',
      price: 34.00,
      image: '../../../../assets/images/cat-mask.png'
    },
    {
      id:4,
      name: 'Renewal Daily Moisturizer',
      description: 'Keeps your skin nourished all day.',
      price: 38.75,
      image: '../../../../assets/images/cat-mask.png'
    },
    {
      id:5,
      name: 'Sun Defense SPF 50',
      description: 'Broad-spectrum UVA/UVB protection.',
      price: 22.00,
      image: '../../../../assets/images/cat-moist.png'
    },
    {
      id:6,
      name: 'Overnight Repair Cream',
      description: 'Rejuvenates your skin while you sleep.',
      price: 55.99,
      image: '../../../../assets/images/cat-mask.png'
    }
  ];

  toggleCategory() { this.categoryOpen = !this.categoryOpen; }
  toggleSkin() { this.skinOpen = !this.skinOpen; }
  togglePrice() { this.priceOpen = !this.priceOpen; }



goToDetails(id: number) {
  this.router.navigate(['/product-details', id]);
}

}
