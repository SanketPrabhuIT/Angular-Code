import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {


  gadgets: any[] = [
  {
  name: 'Samsung Book 3 Pro',
  price: 149000,
  unit: 'N',
  src:"https://m.media-amazon.com/images/I/816fTYVn5lL._SX679_.jpg",
  description: 'Buy the Ultimate Samsung Professional Lappy exclusively for ₹  1,49,000/-',
  qty: 0,
  },
  {
  name: 'Samsung S22 Ultra',
  price: 190000,
  unit: 'N',
  src: "https://m.media-amazon.com/images/I/71tPWK3MzHL._SX569_.jpg",
  description: 'The Epitome of Smartphone World made for legends @ ₹1,90,000/-  ',
  qty: 0,
  },
  ];
  qty: number = 0;
  operation(operator: string, gadgets: any) {
  switch (operator) {
  case '+':
  gadgets.qty++;
  break;
  case '-':
  gadgets.qty--;
  break;
  default:
  gadgets.qty = 0;
  }
  }
  cart: any[] = [];
  total: number = 0;
  toCart(gadgets: any) {
  const cartIndex = this.cart.findIndex((item) => item.name == gadgets.name);
  if (cartIndex == -1) {
  this.cart.push({ ...gadgets });
  } else {
  this.cart[cartIndex].qty++;
  }
  this.total += gadgets.qty * gadgets.price;
  }
  removeFromCart(gadgets: any) {
  const cartIndex = this.cart.findIndex((item) => item.name == gadgets.name);
  if (cartIndex !== -1) {
  this.cart.splice(cartIndex, 1);
  const gadgetsIndex = this.gadgets.findIndex(
  (item) => item.name === gadgets.name
  );
  if (gadgetsIndex !== -1) {
  this.gadgets[gadgetsIndex].qty = 0;
  }
  }
  this.total -= gadgets.qty * gadgets.price;
  }
  }
