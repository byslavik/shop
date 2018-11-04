import { Component, OnInit, Input } from '@angular/core';
import { ProductItem, Category } from './product.models'
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit, ProductItem {
  Category = Category
  @Input() name: String
  @Input() description: String
  @Input() price: Number
  @Input() category: Category
  @Input() isAvailable: Boolean

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  onBuy(){
    console.log(`You just have bought this ${this.name}`)
    this.cartService.addItem({
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      isAvailable: this.isAvailable,
    })
  }

}
