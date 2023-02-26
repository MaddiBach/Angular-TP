import { Component } from '@angular/core';
import { HighlightDirective } from './highlightdirective.directive';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent  {
  color = 'yellow';
  constructor() { }

  ngOnInit() {
  }
}
