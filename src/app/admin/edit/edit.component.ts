import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/Interfaces/Product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
   form: FormGroup
   product: Product
   submitted = false
  constructor(private route: ActivatedRoute, private productServ: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(param =>{
       return this.productServ.getProductById(param['id']);
    })).subscribe(product =>{
        this.product = product
        this.form = new FormGroup({
          productType: new FormControl(this.product.productType, Validators.required),
          title: new FormControl(this.product.title, Validators.required),
          photo: new FormControl(this.product.photo, Validators.required),
          info: new FormControl(this.product.info, Validators.required),
          price: new FormControl(this.product.price, Validators.required)
        })
    })
  }


  submit(){
    if(this.form.invalid)
    return;

    this.submitted = true
    
    const product = {
      ...this.product,
      productType: this.form.value.productType,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      created: new Date()
    }

    this.productServ.update(product).subscribe(res =>{
      this.submitted =false
      this.router.navigate(['/admin', 'dashboard'])
    },
    error =>{
    })
  }

}
