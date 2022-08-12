import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyaccessareasComponent } from './nearbyaccessareas.component';

describe('NearbyaccessareasComponent', () => {
  let component: NearbyaccessareasComponent;
  let fixture: ComponentFixture<NearbyaccessareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyaccessareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyaccessareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
