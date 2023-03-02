import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingsquareComponent } from './growingsquare.component';

describe('GrowingsquareComponent', () => {
  let component: GrowingsquareComponent;
  let fixture: ComponentFixture<GrowingsquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GrowingsquareComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GrowingsquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
