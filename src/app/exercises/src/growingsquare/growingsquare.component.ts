import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
    selector: 'app-growingsquare',
    templateUrl: './growingsquare.component.html',
    styleUrls: ['./growingsquare.component.css'],
    animations: [
        trigger('myAnimation', [
            state('small', style({
                backgroundColor: 'yellow',
            })),
            state('large', style({
                backgroundColor: 'green',
            })),
            transition('small <=> large', animate('300ms ease-in')),
        ]),
    ],
    standalone: true
})
export class GrowingsquareComponent {
  state: string = 'small';

  toggle() {
    this.state = this.state === 'small' ? 'large' : 'small';
  }
}
