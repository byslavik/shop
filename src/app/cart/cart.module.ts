import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CartComponent } from './cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { CartItemQntyComponent } from './cart-list/cart-item-qnty/cart-item-qnty.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartComponent,
    CartListComponent,
    CartSummaryComponent,
    CartItemComponent,
    CartItemQntyComponent
  ],
  exports: [CartComponent],
  providers: [CartService]
})
export class CartModule { }
