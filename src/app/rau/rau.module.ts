import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RauPageRoutingModule } from './rau-routing.module';

import { RauPage } from './rau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RauPageRoutingModule
  ],
  declarations: [RauPage]
})
export class RauPageModule {}
