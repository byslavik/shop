import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { CartService } from '../../cart/cart.service';
import { ProductModel } from './product/product.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: Promise<ProductModel[]>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.items = this.productService.getItems();
  }

  onBuy(item: ProductModel) {
    this.cartService.addItem(item);
  }

}
