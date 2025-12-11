import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
   product: any;
  selectedImage: string = '';
  activeTab = 'desc';

  products = [
    {
      id: 1,
      name: 'Maviderm',
      price: 49.00,
      description:
        'Experience ultimate hydration with our Revitalizing Hyaluronic Serum...',
      ingredients: 'Aqua, Hyaluronic Acid, Glycerin, Aloe Vera...',
      usage: 'Apply 2–3 drops daily after cleansing...',
      images: [
        '../../../../assets/images/mavin.png',
        '../../../../assets/images/cat-cleanser.png',
        '../../../../assets/images/clay-mask.png',
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find((p) => p.id === id);
    this.selectedImage = this.product.images[0];
  }
}
