import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartItem';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  public cart!:Cart;

  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }

  public removeCartItem(cartItem:CartItem):void{
    this.cartService.removeFromCart(cartItem.food.id)
  }

  public changeQuantity(cartItem:CartItem,quantity:string):void{
    const quantityInt = parseInt(quantity);
    this.cartService.changeQuantity(cartItem.food.id,quantityInt);
  }
}
