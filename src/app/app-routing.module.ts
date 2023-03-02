import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArrayFormComponent } from './login/array-form.component';
import { ValidFormComponent } from './register/valid-form.component';
import { ExercisesComponent } from './exercises/exercises.component';

import { VoteTakerComponent } from './exercises/src/child-event-interaction/vote-taker/vote-taker.component';
import { DynamicloadComponent } from './exercises/src/dynamicloading/dynamicload/dynamicload.component';
import { VersionParentComponent } from './exercises/src/intercept-input-ngOnchanges/versionparent/versionparent.component';
import { CountdownViewChildParentComponent } from './exercises/src/child-local-interaction/countdown-parent/countdown-parent.component';
import { NameParentComponent } from './exercises/src/intercept-input-setter/name-parent/name-parent.component';
import { AstronautComponent } from './exercises/src/service-interaction/astronaut/astronaut.component';
import { MissionControlComponent } from './exercises/src/service-interaction/missioncontrol/missioncontrol.component';
import { AttributeDirectiveComponent } from './exercises/src/attribute-directive/attribute-directive.component';
import { RoutingComponent } from './exercises/src/routing/routing.component';
import { businessunitComponent } from './exercises/src/routing/routing-components';
import { AuthenticationGuard } from './exercises/src/auth/authentication.guard';
import { PermissionGuard } from './exercises/src/auth/permission.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'moveFromLeft' },
  },
  {
    path: 'login',
    component: ArrayFormComponent,
    data: { animation: 'moveFromRight' },
  },
  {
    path: 'register',
    component: ValidFormComponent,
    data: { animation: 'fader' },
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
    data: { animation: 'fader' },
    children: [
      {
        path: '',
        canActivateChild: [PermissionGuard],
        children: [
          {
            path: 'votetaker',
            component: VoteTakerComponent,
            data: { animation: 'fader' },
          },
          {
            path: 'dynamicload',
            component: DynamicloadComponent,
            data: { animation: 'fader' },
          },
          {
            path: 'ngOnchanges',
            component: VersionParentComponent,
          },
          {
            path: 'countdown',
            component: CountdownViewChildParentComponent,
            data: { animation: 'fader' },
          },
          {
            path: 'Setter',
            component: NameParentComponent,
            data: { animation: 'fader' },
          },
          {
            path: 'Service',
            component: MissionControlComponent,
            data: { animation: 'fader' },
          },
          {
            path: 'attribute-directive',
            component: AttributeDirectiveComponent,
            data: { animation: 'fader' },
          },
          {
            path: 'routing',
            component: RoutingComponent,
          },
          {
            path: 'routing/:id',
            component: businessunitComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
