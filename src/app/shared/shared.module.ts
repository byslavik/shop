import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverItemDirective } from './hover-item.directive';
import { IncreaseFontSizeDirective } from './increase-font-size.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HoverItemDirective, IncreaseFontSizeDirective],
  exports: [HoverItemDirective, IncreaseFontSizeDirective]
})
export class SharedModule { }
