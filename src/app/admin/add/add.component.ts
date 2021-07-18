import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
 form: FormGroup
 submitted:boolean = false
  constructor(private productService: ProductService, private router: Router ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      productType: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    })
  }

  submit(){
     if(this.form.invalid)
     return;

     this.submitted = true
     
     const product = {
      productType: this.form.value.productType,
       title: this.form.value.title,
       photo: this.form.value.photo,
       info: this.form.value.info,
       price: this.form.value.price,
       created: new Date()
     }
    
     this.productService.addProduct(product).subscribe(res =>{
       this.submitted =false
       this.form.reset()
       this.router.navigate(['/'])
     },
     error =>{
     })
    
   
  }

}
