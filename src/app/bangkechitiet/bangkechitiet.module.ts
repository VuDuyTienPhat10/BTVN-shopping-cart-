import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BangkechitietPageRoutingModule } from './bangkechitiet-routing.module';

import { BangkechitietPage } from './bangkechitiet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BangkechitietPageRoutingModule
  ],
  declarations: [BangkechitietPage]
})
export class BangkechitietPageModule {}
