import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product/product.models'
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:ProductItem[] = []
  expanded: Boolean = false
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getItems()
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
  }

}
