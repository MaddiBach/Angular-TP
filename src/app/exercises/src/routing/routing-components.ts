import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'business-unit-components',
  template: `
    <div class="exercise">
      <h3>Cette businessunit a pour id : {{ businessunitId }}</h3>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
      <button (click)="gotoBusinessUnits()">All businessunits</button>
      <div>
        <button (click)="showOverview()">Overview</button>
        <button (click)="showContact()">Contact</button>
      </div>
    </div>
  `,
})
export class businessunitComponent implements OnInit {
  businessunitId: any;
  constructor(private router: Router, private route: ActivatedRoute) {}
  id: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.businessunitId = parseInt(params.get('id'));
    });
  }

  goPrevious() {
    let previousId = this.businessunitId - 1;
    this.router.navigate(['../', previousId], { relativeTo: this.route });
  }
  goNext() {
    let nextId = this.businessunitId + 1;
    this.router.navigate(['../', nextId], { relativeTo: this.route });
  }
  gotoBusinessUnits() {
    let selectedId = this.businessunitId ? this.businessunitId : null;
    this.router.navigate(['../', { id: selectedId, test: 'test' }], {
      relativeTo: this.route,
    });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
