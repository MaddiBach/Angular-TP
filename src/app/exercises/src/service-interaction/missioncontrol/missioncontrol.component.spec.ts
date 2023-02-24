import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionControlComponent } from './missioncontrol.component';

describe('MissioncontrolComponent', () => {
  let component: MissionControlComponent;
  let fixture: ComponentFixture<MissionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
