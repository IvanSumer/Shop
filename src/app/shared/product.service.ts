import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/Product';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

addProduct(product){
  return this.http.post('https://localhost:44306/api/Product/AddProducts', product)
}

getProducts()  {
  return this.http.get('https://localhost:44306/api/Product/getProducts')
}

getProductById(id)  {
  return this.http.get(`https://localhost:44306/api/Product/product/${id}`)
}

}
