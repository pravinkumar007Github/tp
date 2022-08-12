import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecertificationComponent } from './coursecertification.component';

describe('CoursecertificationComponent', () => {
  let component: CoursecertificationComponent;
  let fixture: ComponentFixture<CoursecertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
