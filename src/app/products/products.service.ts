import { Injectable } from '@angular/core';
import { ProductModel, Category } from './product-list/product/product.models';

const items: ProductModel[] = [{
  id: 0,
  name: 'Motor Oil',
  description: '5w40',
  price: 40,
  category: Category.Car,
  availability: true,
  updatedDate: 1542800764457
},
{
  id: 1,
  name: 'Samsung TV',
  description: '46" OLED',
  price: 455,
  category: Category.Home,
  availability: true
},
{
  id: 2,
  name: 'Tools',
  description: '34 items',
  price: 55,
  category: Category.Car,
  availability: true
},
{
  id: 3,
  name: 'Chair',
  description: 'Big and soft',
  price: 25,
  category: Category.Home,
  availability: false,
  updatedDate: 1542400764457
},
{
  id: 4,
  name: 'Lights',
  description: 'Ambient light',
  price: 10,
  category: Category.Car,
  availability: true
},
{
  id: 5,
  name: 'Forks',
  description: '13 items',
  price: 65,
  category: Category.Kitchen,
  availability: false
}];

@Injectable()
export class ProductService {

  constructor() { }

  getItems(): Promise<ProductModel[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });
  }
}
