import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderByComponent } from './components/order-by/order-by.component';
import { HoverItemDirective } from './directives/hover-item.directive';
import { IncreaseFontSizeDirective } from './directives/increase-font-size.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderByComponent, HoverItemDirective, IncreaseFontSizeDirective, OrderByPipe],
  exports: [OrderByComponent, HoverItemDirective, IncreaseFontSizeDirective, OrderByPipe]
})
export class SharedModule { }
