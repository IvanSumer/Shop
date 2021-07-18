import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Product } from 'src/app/Interfaces/Product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products
  prSub: Subscription
  rmSub: Subscription
  productName
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.prSub = this.productService.getProducts().subscribe(res =>{
      this.products = res;
    })
  }

  ngOnDestroy(){
    if(this.prSub){
      this.prSub.unsubscribe();
    }

    if(this.rmSub){
      this.rmSub.unsubscribe();
    }
  }

  remove(id){
     this.rmSub = this.productService.remove(id).subscribe(() =>{
      this.products = this.products.filter(prod=> prod.id != id)
     })
  }

}
