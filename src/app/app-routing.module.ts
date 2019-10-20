import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from '../config/pages-config';


const routes: Routes = [    {
  path: '',
  redirectTo: config.profile.route,
  pathMatch: 'full'
},
{
  //  profiles page
  path: config.profile.name,
  loadChildren: './profile/profile.module#ProfileModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
