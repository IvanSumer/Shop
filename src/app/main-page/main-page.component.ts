import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/Product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  products
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res =>{
      console.log(res);
      this.products = res
    });
  }

}
