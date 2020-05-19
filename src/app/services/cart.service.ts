import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  fruits: Product[] = [
    { id: 0, name: 'Táo', price: 8.99, amount: 0 },
    { id: 1, name: 'Đu đủ', price: 5.49, amount: 0 },
    { id: 2, name: 'Dừa', price: 4.99, amount: 0 },
    { id: 3, name: 'Chanh', price: 6.99, amount: 0 }
  ];
  veg: Product[] = [
    { id: 5, name: 'Cải ngọt', price: 1.1, amount: 0 },
    { id: 6, name: 'Rau muống', price: 2.2, amount: 0 },
    { id: 7, name: 'Rau chân vịt', price: 3.3, amount: 0 },
    { id: 8, name: 'Rau má', price: 4.4, amount: 0 }
  ];
  cu: Product[] = [
    { id: 9, name: 'Củ cải trắng', price: 1.1, amount: 0 },
    { id: 10, name: 'Cà rốt', price: 2.2, amount: 0 },
    { id: 11, name: 'Khoai Lan', price: 3.3, amount: 0 },
    { id: 12, name: 'Khoai Tây', price: 4.4, amount: 0 }
  ];


  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getFruits() {
    return this.fruits;
  }
  getVeg() {
    return this.veg;
  }
  getCu() {
    return this.cu;
  }



  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {

    this.cart.forEach((p,index)=>{
      if(p['id']===product.id){
        p['amount'] -= 1;
        if(p['amount']==0){
          this.cart.splice(index,1)
        }
      }
    });

    this.cartItemCount.next(this.cartItemCount.value-1);

  }

  removeProduct(product) {
    this.cart.forEach((p,index)=>{
      if(p.id===product.id){
        this.cart.splice(index,1);
        this.cartItemCount.next(this.cartItemCount.value-1);
      }
    })
  }
}
