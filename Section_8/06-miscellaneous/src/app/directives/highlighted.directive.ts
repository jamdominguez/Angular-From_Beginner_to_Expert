import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private el: ElementRef) {
  }

  @Input("appHighlighted") newColor?: string;

  @HostListener('mouseenter') mouseIn() {
    this.el.nativeElement.style.backgroundColor = this.newColor ? this.newColor : '#AAFF13';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
