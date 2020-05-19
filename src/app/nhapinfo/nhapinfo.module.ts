import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhapinfoPageRoutingModule } from './nhapinfo-routing.module';

import { NhapinfoPage } from './nhapinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhapinfoPageRoutingModule
  ],
  declarations: [NhapinfoPage]
})
export class NhapinfoPageModule {}
