import { Injectable } from '@angular/core';
import { ProductModel, Category } from './product-list/product/product.models'

const items:ProductModel[] = [{
  id: 0,
  name: 'Product1',
  description: 'Lorem ipsum dolor sit',
  price: 10,
  category: Category.CAR,
  isAvailable: true
},
{
  id: 1,
  name: 'Product2',
  description: 'Lorem ipsum dolor sit',
  price: 10,
  category: Category.HOME,
  isAvailable: true
},
{
  id: 2,
  name: 'Product3',
  description: 'Lorem ipsum dolor sit',
  price: 103,
  category: Category.CAR,
  isAvailable: true
},
{
  id: 3,
  name: 'Product4',
  description: 'Lorem ipsum dolor sit',
  price: 1,
  category: Category.HOME,
  isAvailable: false
},
{
  id: 4,
  name: 'Product5',
  description: 'Lorem ipsum dolor sit',
  price: 107,
  category: Category.CAR,
  isAvailable: true
},
{
  id: 5,
  name: 'Product6',
  description: 'Lorem ipsum dolor sit',
  price: 110,
  category: Category.KITCHEN,
  isAvailable: false
}]

@Injectable()
export class ProductService {

  constructor() { }

  getItems():ProductModel[] {
    return items
  }
}
