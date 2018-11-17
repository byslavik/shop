import { Component, OnInit, DoCheck } from '@angular/core';
import { CartItemModel, CartEventModel, CartActions } from './cart-list/cart-item/cart-item.model'
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {
  items:CartItemModel[] = [];
  totalSumm: number;
  totalQnty: number;
  expanded: Boolean = false;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getItems()
  }

  ngDoCheck() {
    if (this.totalQnty !== this.cartService.getTotalItems()) {
      this.getItems()
    }
  }

  onChangeItemState(cartAction: CartEventModel): void {
    switch(cartAction.action) {
      case CartActions.REMOVE: {
        this.cartService.removeItem(cartAction.item)
        break;
      }
      case CartActions.INCREASE: {
        this.cartService.changeQty(cartAction.item, 1)
        break;
      }
      case CartActions.DECREASE: {
        cartAction.item.quantity > 1 && this.cartService.changeQty(cartAction.item, -1)
        break;
      }
    }

  }

  onExpand() {
    this.expanded = !this.expanded
  }
  onClearCart() {
    this.cartService.removeItems()
    this.getItems() 
  }
  getItems() {
    this.items = this.cartService.getItems()
    this.totalSumm = this.cartService.getTotalSumm();
    this.totalQnty = this.cartService.getTotalItems();
  }

}
