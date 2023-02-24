import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionparentComponent } from './versionparent.component';

describe('VersionparentComponent', () => {
  let component: VersionparentComponent;
  let fixture: ComponentFixture<VersionparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
