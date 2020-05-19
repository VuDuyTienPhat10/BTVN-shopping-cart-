import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BangkechitietPage } from './bangkechitiet.page';

const routes: Routes = [
  {
    path: '',
    component: BangkechitietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BangkechitietPageRoutingModule {}
