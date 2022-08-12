import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarenrollComponent } from './sidebarenroll.component';

describe('SidebarenrollComponent', () => {
  let component: SidebarenrollComponent;
  let fixture: ComponentFixture<SidebarenrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarenrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
