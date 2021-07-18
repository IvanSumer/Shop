import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  products =[]
  totalPrice = 0
  constructor(private productServ: ProductService) { }

  ngOnInit(): void {
   this.products = this.productServ.cartProducts
   for (let i = 0; i < this.products.length; i++) {
     this.totalPrice += this.products[i].price;
   }
  }

  deleteProduct(product){
    this.totalPrice -= product.price
    this.products.splice(this.products.indexOf(product),1);
  }

}
