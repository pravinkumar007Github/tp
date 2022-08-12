import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{path: "", component : HomepageComponent},
{path : "admin", loadChildren : ()=> import('./admin/admin.module').then(admin =>admin.AdminModule)},
{path : "about-us", component : AboutusComponent},
{path : "contact-us", component : ContactusComponent},
{path : "courses", component : CoursesComponent},
{path : "courses", loadChildren : ()=> import('./courses/courses.module').then(courses =>courses.CoursesModule)},
{path : "**", component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
