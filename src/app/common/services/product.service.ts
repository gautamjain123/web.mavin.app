import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  ingredients?: string;
  usage?: string;
  images: string[];
  category: 'Cleansers' | 'Serums' | 'Masks' | 'Moisturizers' | 'Sunscreen' | 'Hair Care';
  skinTypes: ('Oily' | 'Dry' | 'Combination' | 'Sensitive' | 'Acne-Prone')[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Maviderm',
      price: 409,
      category: 'Moisturizers',
      skinTypes: ['Dry', 'Sensitive'],
      description: 'Soothes, re-hydrates and protects sensitive skin.',
      ingredients: 'Aqua, Emollients, Skin Protectants',
      usage: 'Apply gently twice daily.',
      images: ['../../../assets/mavin products/maviderm.png']
    },
    {
      id: 2,
      name: 'Cove Oil',
      price: 245,
      category: 'Moisturizers',
      skinTypes: ['Dry'],
      description: 'For deep skin moisturisation.',
      ingredients: 'Cocos Nucifera Oil, Vitamin E',
      usage: 'Massage gently after bath.',
      images: ['../../../assets/mavin products/cove-oil.png']
    },
    {
      id: 3,
      name: 'Maviderm Ultra',
      price: 345,
      category: 'Moisturizers',
      skinTypes: ['Dry', 'Sensitive'],
      description: 'Intensive care for extremely dry skin.',
            ingredients: 'Cocos Nucifera Oil, Vitamin E',

      images: ['../../../assets/mavin products/maviderm-ultra.png']
    },
    {
      id: 4,
      name: 'Mavigain',
      price: 145,
      category: 'Hair Care',
      skinTypes: ['Oily', 'Combination'],
      description: 'Hair loss treatment solution.',
            ingredients: 'Cocos Nucifera Oil, Vitamin E',

      images: ['../../../assets/mavin products/mavigain.png']
    },
    {
      id: 5,
      name: 'Mavigain Pro',
      price: 510,
      category: 'Hair Care',
      skinTypes: ['Oily'],
      description: 'Advanced hair regrowth solution.',
            ingredients: 'Cocos Nucifera Oil, Vitamin E',

      images: ['../../../assets/mavin products/mavigain-pro.png']
    },
    {
      id: 6,
      name: 'Mavikare',
      price: 320,
      category: 'Hair Care',
      skinTypes: ['Oily', 'Acne-Prone'],
      description: 'Dandruff treatment shampoo.',
            ingredients: 'Cocos Nucifera Oil, Vitamin E',

      images: ['../../../assets/mavin products/mavikare.png']
    },
    {
      id: 7,
      name: 'Trivera SS',
      price: 99,
      category: 'Cleansers',
      skinTypes: ['Sensitive'],
      description: 'Cleansing lotion for sensitive skin.',
            ingredients: 'Cocos Nucifera Oil, Vitamin E',

      images: ['../../../assets/mavin products/trivera-ss.png']
    },
    {
      id: 8,
      name: 'U.R.10',
      price: 400,
      category: 'Moisturizers',
      skinTypes: ['Dry'],
      description: 'Intensive moisturization for dry skin conditions.',
            ingredients: 'Cocos Nucifera Oil, Vitamin E',

      images: ['../../../assets/mavin products/ur-10.png']
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
