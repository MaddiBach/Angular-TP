import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArrayFormComponent } from './login/array-form.component';
import { ValidFormComponent } from './register/valid-form.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VoteTakerComponent } from './exercises/src/child-event-interaction/vote-taker/vote-taker.component';
import { VoterComponent } from './exercises/src/child-event-interaction/voter/voter.component';
import { AdBannerComponent } from './exercises/src/dynamicloading/src/ad-banner.component';
import { DynamicloadComponent } from './exercises/src/dynamicloading/dynamicload/dynamicload.component';
import { AdDirective } from './exercises/src/dynamicloading/src/ad.directive';
import { HeroJobAdComponent } from './exercises/src/dynamicloading/src/hero-job-ad.component';
import { HeroProfileComponent } from './exercises/src/dynamicloading/src/hero-profile.component';
import { DynamicLoadingComponent } from './exercises/src/dynamicloading/src/dynamic-loading.component';
import { VersionChildComponent } from './exercises/src/intercept-input-ngOnchanges/versionchild/versionchild.component';
import { VersionParentComponent } from './exercises/src/intercept-input-ngOnchanges/versionparent/versionparent.component';
import { CountdownTimerComponent } from './exercises/src/child-local-interaction/countdown-timer/countdown-timer.component';
import { CountdownViewChildParentComponent } from './exercises/src/child-local-interaction/countdown-parent/countdown-parent.component';
import { NameChildComponent } from './exercises/src/intercept-input-setter/name-child/name-child.component';
import { NameParentComponent } from './exercises/src/intercept-input-setter/name-parent/name-parent.component';
import { AstronautComponent } from './exercises/src/service-interaction/astronaut/astronaut.component';
import { MissionControlComponent } from './exercises/src/service-interaction/missioncontrol/missioncontrol.component';
import { AttributeDirectiveComponent } from './exercises/src/attribute-directive/attribute-directive.component';
import { HighlightDirective } from './exercises/src/attribute-directive/highlight-directive.directive';
import { HideAfterDirective } from './exercises/src/attribute-directive/hide-after.directive';
import { RoutingComponent } from './exercises/src/routing/routing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { ExampleDirective } from './example.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFormComponent,
    ValidFormComponent,
    ExercisesComponent,
    HomeComponent,
    NavbarComponent,
    VoteTakerComponent,
    VoterComponent,
    AdBannerComponent,
    DynamicloadComponent,
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    DynamicLoadingComponent,
    VersionChildComponent,
    VersionParentComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponent,
    NameChildComponent,
    NameParentComponent,
    AstronautComponent,
    MissionControlComponent,
    AttributeDirectiveComponent,
    HighlightDirective,
    HideAfterDirective,
    RoutingComponent,
    ExampleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
