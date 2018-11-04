import { Injectable } from '@angular/core';
import { ProductItem, Category } from './product.models'

const items:ProductItem[] = [{
  name: 'Product1',
  description: 'Lorem ipsum dolor sit',
  price: 10,
  category: Category.CAR,
  isAvailable: true
},
{
  name: 'Product2',
  description: 'Lorem ipsum dolor sit',
  price: 10,
  category: Category.HOME,
  isAvailable: true
},
{
  name: 'Product3',
  description: 'Lorem ipsum dolor sit',
  price: 103,
  category: Category.CAR,
  isAvailable: true
},
{
  name: 'Product4',
  description: 'Lorem ipsum dolor sit',
  price: 1,
  category: Category.HOME,
  isAvailable: false
},
{
  name: 'Product5',
  description: 'Lorem ipsum dolor sit',
  price: 107,
  category: Category.CAR,
  isAvailable: true
},
{
  name: 'Product6',
  description: 'Lorem ipsum dolor sit',
  price: 110,
  category: Category.KITCHEN,
  isAvailable: false
}]

@Injectable()
export class ProductService {

  constructor() { }

  getItems():ProductItem[] {
    return items
  }
}
