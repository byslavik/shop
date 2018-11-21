import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel, CartEventModel } from '../cart-list/cart-item/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  sortKey = 'price';
  sortKeys: Array<string> = ['price', 'name', 'quantity'];
  @Input() items: CartItemModel[];

  constructor() { }

  ngOnInit() {
  }
  @Output()
  change: EventEmitter<CartEventModel> = new EventEmitter<CartEventModel>();

  onChangeItemState(event): void {
    this.change.emit(event);
  }

  setOrderProperty(value) {
    this.sortKey = value;
  }
}
