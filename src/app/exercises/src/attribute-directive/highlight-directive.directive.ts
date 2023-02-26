import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class HighlightDirective implements AfterViewInit {

  @Input() highlightDirective = 'yellow';

  constructor(private el: ElementRef,
              private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setBackgroundColor(this.highlightDirective);
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.highlightDirective);
  }

  @HostListener('click') onClick() {
    this.highlightDirective = 'red';
  }
}