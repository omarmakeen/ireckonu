import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from '../config/pages-config';


const routes: Routes = [    {
  path: '',
  redirectTo: config.profileSearch.route,
  pathMatch: 'full'
},
{
  //  profiles page
  path: config.profileSearch.name,
  loadChildren: './profile-search/profile-search.module#ProfileSearchModule',
  data:  config.profileSearch 
},
{
  //  profiles page
  path: config.profileDetails.name,
  loadChildren: './profile-details/profile-details.module#ProfileDetailsModule',
  data: config.profileDetails
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
