import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomtotopComponent } from './bottomtotop.component';

describe('BottomtotopComponent', () => {
  let component: BottomtotopComponent;
  let fixture: ComponentFixture<BottomtotopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomtotopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomtotopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
