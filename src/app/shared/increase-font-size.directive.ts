import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIncreaseFontSize]',
  host: {
    '(click)': 'onMouseClick()'
}
})
export class IncreaseFontSizeDirective {
  private fontSize = 0;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.fontSize = Number(window.getComputedStyle(this.element.nativeElement, null).getPropertyValue('font-size').replace('px', ''));
  }

  onMouseClick() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', `${++this.fontSize}px`);
  }
}
