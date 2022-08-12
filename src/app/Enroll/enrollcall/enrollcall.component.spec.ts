import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollcallComponent } from './enrollcall.component';

describe('EnrollcallComponent', () => {
  let component: EnrollcallComponent;
  let fixture: ComponentFixture<EnrollcallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollcallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
