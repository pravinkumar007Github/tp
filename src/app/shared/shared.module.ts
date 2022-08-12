import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomtotopComponent } from '../bottomtotop/bottomtotop.component';
import { EnrollcallComponent } from '../Enroll/enrollcall/enrollcall.component';
import { FooterEnrollComponent } from '../Enroll/footer-enroll/footer-enroll.component';
import { SidebarenrollComponent } from '../Enroll/sidebarenroll/sidebarenroll.component';



@NgModule({
  declarations: [
    FooterEnrollComponent,
    SidebarenrollComponent,
    EnrollcallComponent,
    BottomtotopComponent ],
  imports: [
    CommonModule
  ],
  
  exports : [
    FooterEnrollComponent,
    SidebarenrollComponent,
    EnrollcallComponent,
    BottomtotopComponent 
  ]
})
export class SharedModule { }
