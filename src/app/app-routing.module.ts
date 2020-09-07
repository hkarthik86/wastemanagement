import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./driver-search/driver-search.module').then( m => m.DriverSearchPageModule)
  },
  {
    path: 'customer-list',
    loadChildren: () => import('./customer-list/customer-list.module').then( m => m.CustomerListPageModule)
  },
  {
    path: 'driver-search',
    loadChildren: () => import('./driver-search/driver-search.module').then( m => m.DriverSearchPageModule)
  },
  {
    path: 'customer-details',
    loadChildren: () => import('./customer-details/customer-details.module').then( m => m.CustomerDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
