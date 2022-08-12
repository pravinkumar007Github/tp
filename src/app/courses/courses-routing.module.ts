import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhpComponent } from './php/php.component';

const routes: Routes = [
  {path : "", children:[
    {path : "php-training-in-chennai", component : PhpComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
