import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ProductItem } from '../product/product.models'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items:ProductItem[]

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.items = this.productService.getItems()
  }

}
