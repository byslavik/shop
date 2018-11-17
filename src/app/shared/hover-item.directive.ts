import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverItem]'
})
export class HoverItemDirective {
  private className = ''

  @HostBinding('class') get getClassName() {
    return this.className
  }

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.className = 'hoverItem'
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.className = ''
  }


  @HostListener('mousedown', ['$event'])
  down(event: Event) {
    this.className = 'clickItem'
  }

}
