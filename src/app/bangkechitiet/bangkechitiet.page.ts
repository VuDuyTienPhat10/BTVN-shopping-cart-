import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-bangkechitiet',
  templateUrl: './bangkechitiet.page.html',
  styleUrls: ['./bangkechitiet.page.scss'],
})
export class BangkechitietPage implements OnInit {
  cart=[];
  constructor(private cs:CartService) { }

  ngOnInit() {
    this.cart=this.cs.getCart();
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

}
