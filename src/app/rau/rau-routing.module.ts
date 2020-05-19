import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RauPage } from './rau.page';

const routes: Routes = [
  {
    path: '',
    component: RauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RauPageRoutingModule {}
