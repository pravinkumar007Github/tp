import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { PhpComponent } from './php/php.component';
import { KeyfeaturesComponent } from './general/keyfeatures/keyfeatures.component';
import { UpcomingbatchComponent } from './general/upcomingbatch/upcomingbatch.component';
import { OthermenuComponent } from './general/othermenu/othermenu.component';
import { CoursecertificationComponent } from './general/coursecertification/coursecertification.component';
import { CoursesfeaturesComponent } from './general/coursesfeatures/coursesfeatures.component';
import { CourseimpactComponent } from './general/courseimpact/courseimpact.component';
import { NearbyaccessareasComponent } from './general/nearbyaccessareas/nearbyaccessareas.component';
import { DialogboxComponent } from './general/dialogbox/dialogbox.component';
@NgModule({
  declarations: [ 
   PhpComponent, 
   KeyfeaturesComponent, 
   UpcomingbatchComponent, 
   OthermenuComponent, 
   CoursecertificationComponent, 
   CoursesfeaturesComponent, 
   CourseimpactComponent, 
   NearbyaccessareasComponent, 
   DialogboxComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
