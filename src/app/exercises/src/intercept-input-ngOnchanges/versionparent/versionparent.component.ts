import { Component } from '@angular/core';

@Component({
  selector: 'app-versionparent',
  templateUrl: './versionparent.component.html',
  styleUrls: ['./versionparent.component.css'],
})
export class VersionParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
