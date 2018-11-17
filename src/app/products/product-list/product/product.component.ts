import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ProductModel, Category } from './product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  Category = Category;
  @Input() item: ProductModel;

  @Output()
  buy: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onBuy(): void {
    this.buy.emit(this.item);
  }
}
