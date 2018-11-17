import { Injectable } from '@angular/core';
import { CartItemModel } from './cart-list/cart-item/cart-item.model';

@Injectable()
export class CartService {
  cartItems: CartItemModel[] = [];

  constructor() { }

  getItems(): CartItemModel[] {
    return this.cartItems;
  }

  addItem(product): void {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    const cartItems = this.cartItems;
    if (index !== -1) {
      cartItems[index].quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.cartItems = [...cartItems];
  }
  removeItem(itemToRemove: CartItemModel): void {
    this.cartItems = [ ...this.cartItems.filter(item => item.id !== itemToRemove.id) ];
  }
  removeItems(): void {
    this.cartItems = [];
  }
  changeQty(product: CartItemModel, qtyToChange: number): void {
    const cartItems = this.cartItems;
    const index = this.cartItems.findIndex(item => item.id === product.id);
    cartItems[index].quantity += qtyToChange;

    this.cartItems = [...cartItems];
  }

  getTotalSumm(): number {
    return this.cartItems.reduce((summ, { price, quantity }) => summ + price * quantity, 0);
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, { quantity }) => total + quantity, 0);
  }
}
