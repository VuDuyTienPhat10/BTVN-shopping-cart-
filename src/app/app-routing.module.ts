import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'rau',
    loadChildren: () => import('./rau/rau.module').then( m => m.RauPageModule)
  },
  {
    path: 'cu',
    loadChildren: () => import('./cu/cu.module').then( m => m.CuPageModule)
  },
  {
    path: 'nhapinfo',
    loadChildren: () => import('./nhapinfo/nhapinfo.module').then( m => m.NhapinfoPageModule)
  },
  {
    path: 'bangkechitiet',
    loadChildren: () => import('./bangkechitiet/bangkechitiet.module').then( m => m.BangkechitietPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
