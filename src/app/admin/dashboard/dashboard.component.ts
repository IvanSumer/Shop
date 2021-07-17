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
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.prSub = this.productService.getProducts().subscribe(res =>{
      console.log(res)
      this.products = res;
    })
  }

  ngOnDestroy(){
    if(this.prSub){
      this.prSub.unsubscribe();
    }
  }

  remove(id){
     this.productService.remove(id).subscribe(() =>{
      this.products = this.products.filter(prod=> prod.id != id)
     })
  }

}
