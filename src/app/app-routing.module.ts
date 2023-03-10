import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExercisesComponent } from './exercises/exercises.component';

import { VoteTakerComponent } from './exercises/src/child-event-interaction/vote-taker/vote-taker.component';
import { DynamicloadComponent } from './exercises/src/dynamicloading/dynamicload/dynamicload.component';
import { VersionParentComponent } from './exercises/src/intercept-input-ngOnchanges/versionparent/versionparent.component';
import { CountdownViewChildParentComponent } from './exercises/src/child-local-interaction/countdown-parent/countdown-parent.component';
import { NameParentComponent } from './exercises/src/intercept-input-setter/name-parent/name-parent.component';
import { AstronautComponent } from './exercises/src/service-interaction/astronaut/astronaut.component';
import { MissionControlComponent } from './exercises/src/service-interaction/missioncontrol/missioncontrol.component';
import { AttributeDirectiveComponent } from './exercises/src/attribute-directive/attribute-directive.component';
import { RestaurantComponent } from './exercises/src/restaurant/restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'moveFromLeft' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'moveFromRight' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'fader' },
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
    data: { animation: 'fader' },
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
        path: 'restaurant',
        component: RestaurantComponent,
        data: { animation: 'fader' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
