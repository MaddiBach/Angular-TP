import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionchildComponent } from './versionchild.component';

describe('VersionchildComponent', () => {
  let component: VersionchildComponent;
  let fixture: ComponentFixture<VersionchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
