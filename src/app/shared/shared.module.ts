import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverItemDirective } from './hover-item.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HoverItemDirective],
  exports: [HoverItemDirective]
})
export class SharedModule { }
