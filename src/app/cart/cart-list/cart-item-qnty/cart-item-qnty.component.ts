import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel, CartEventModel, CartActions } from '../../cart-list/cart-item/cart-item.model'

@Component({
  selector: 'app-cart-item-qnty',
  templateUrl: './cart-item-qnty.component.html',
  styleUrls: ['./cart-item-qnty.component.css']
})
export class CartItemQntyComponent implements OnInit {
  @Input() item: CartItemModel;

  constructor() { }

  ngOnInit() {
  }

  @Output()
  change: EventEmitter<CartEventModel> = new EventEmitter<CartEventModel>();

  onIncreaseItem(): void {
    this.change.emit({ item: this.item, action: CartActions.INCREASE });
  }

  onDecreaseItem(): void {
    this.change.emit({ item: this.item, action: CartActions.DECREASE });
  }

}
