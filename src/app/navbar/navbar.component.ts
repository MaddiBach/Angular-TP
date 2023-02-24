import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() public animationSelect = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  onSelect(event: Event, name: string) {
    event.stopPropagation();
    this.animationSelect.next(name);
  }
}
