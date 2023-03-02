import { Component, ElementRef } from '@angular/core';
import { HighlightDirective } from './highlightdirective.directive';

@Component({
  selector: '[app-attribute-directive]',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css'],
})
export class AttributeDirectiveComponent {
  color = 'yellow';
  constructor(private el: ElementRef) {}

  ngOnInit() {}
  highlight(color: string) {
    this.el.nativeElement.style.backgroundcolor = color;
  }
}
