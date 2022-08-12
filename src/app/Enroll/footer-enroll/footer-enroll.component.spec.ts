import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEnrollComponent } from './footer-enroll.component';

describe('FooterEnrollComponent', () => {
  let component: FooterEnrollComponent;
  let fixture: ComponentFixture<FooterEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
