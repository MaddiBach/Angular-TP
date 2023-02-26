import { Component } from '@angular/core';
import { fader } from '../../route-animations';
import { trigger, transition, useAnimation } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-exercices',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  animations: [fader],
})
export class ExercisesComponent {

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
