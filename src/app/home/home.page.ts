import { Component, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { CartService } from '../services/cart.service';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', { static: true, read: ElementRef }) fab: ElementRef;
  @ViewChild('taolao', { static: false }) taolao: ElementRef;
  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.products = this.cartService.getFruits();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('animate__bounce');

  }

  async openCart() {
    this.animateCSS('animate__bounce');

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animate__animated', 'animate__bounce')
      this.animateCSS('animate__bounce');
    });
    modal.present();
  }

  async animateCSS(animationName) {
    const node = this.fab.nativeElement;

    node.classList.add('animate__animated', animationName)

    setTimeout(()=>{
      const node = this.fab.nativeElement;
      node.classList.remove('animate__animated', animationName)
    },800);

  }

}
