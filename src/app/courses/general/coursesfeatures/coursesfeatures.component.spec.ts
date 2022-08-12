import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesfeaturesComponent } from './coursesfeatures.component';

describe('CoursesfeaturesComponent', () => {
  let component: CoursesfeaturesComponent;
  let fixture: ComponentFixture<CoursesfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesfeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
