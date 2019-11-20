import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TripExpensesComponent} from './trip-expenses/trip-expenses.component';
import {TripGalleryComponent} from './trip-gallery/trip-gallery.component';
import {TripPlannerComponent} from './trip-planner/trip-planner.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'new-trip',
    loadChildren: () => import('./new-trip/new-trip.module').then(m => m.NewTripModule)
  },
  {
      path: 'trip-detail',
      loadChildren: () => import('./trip-detail/trip-detail.module').then(m => m.TripDetailModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
