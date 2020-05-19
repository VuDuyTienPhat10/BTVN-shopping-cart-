import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhapinfoPage } from './nhapinfo.page';

const routes: Routes = [
  {
    path: '',
    component: NhapinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhapinfoPageRoutingModule {}
