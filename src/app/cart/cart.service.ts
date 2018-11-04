import { Injectable } from '@angular/core';
import { ProductItem } from '../product/product.models'

@Injectable()
export class CartService {
  cartItems:ProductItem[] = []

  constructor() { }
  
  getItems():ProductItem[] {
    return this.cartItems
  }

  addItem(product) {
    this.cartItems.push(product)
  }
  removeItems() {
    this.cartItems = []
  }
}
