import { Component, OnInit } from '@angular/core';
import { Product, CartService } from './../../services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController,private router:Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    // Perfom PayPal or Stripe checkout process

    let alert = await this.alertCtrl.create({
      header: 'Cảm ơn bạn đã đặt hàng',
      message: 'Vui lòng nhập thông tin và địa chỉ để chúng tôi tiện giao hàng cho bạn nhanh nhất nhé!!',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
      this.router.navigate(['/nhapinfo'])
    });
  }

}
