import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../../common/services/product.service';

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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // ✅ Get product directly from service
    const foundProduct = this.productService.getProductById(id);

    if (foundProduct) {
      this.product = foundProduct;
      this.selectedImage = this.product.images[0];
    }
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }
}
