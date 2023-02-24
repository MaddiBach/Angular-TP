import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicloadComponent } from './dynamicload.component';

describe('DynamicloadComponent', () => {
  let component: DynamicloadComponent;
  let fixture: ComponentFixture<DynamicloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
