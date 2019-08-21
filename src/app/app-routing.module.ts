import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularTaskComponent } from './regular-task/regular-task.component'

const routes: Routes = [
  {
    path:'regular-tasks',
    component:RegularTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
