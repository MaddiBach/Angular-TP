import { Component } from '@angular/core';
import { businessunits } from './businessunits';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
})
export class RoutingComponent {
  businessunits = businessunits;
  selectedBusinessUnit: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOninit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedBusinessUnit = params.get('id');
    });
  }
  onSelect(businessUnit: any) {
    this.router.navigate([businessUnit.id], { relativeTo: this.route });
  }

  isSelected(businessUnit: any) {
    return businessUnit.id === this.selectedBusinessUnit;
  }
}
