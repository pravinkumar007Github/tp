import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseimpactComponent } from './courseimpact.component';

describe('CourseimpactComponent', () => {
  let component: CourseimpactComponent;
  let fixture: ComponentFixture<CourseimpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseimpactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
