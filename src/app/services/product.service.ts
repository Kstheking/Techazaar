import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

import { HttpClient } from '@angular/common/http';

import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productArray!: Product[];
  constructor(private http: HttpClient) { 
    this.productArray = [
      new Product('assets/images/donuts/blueDonut.svg', 'Blue Donut', 34, 10, 0),
      new Product('assets/images/donuts/darkOrangeDonut.svg', 'Dark Orange Donut', 34, 10, 0),
      new Product('assets/images/donuts/greenDonut.svg', 'Green Donut', 34, 0, 10),
      new Product('assets/images/donuts/lightBlueDonut.svg', 'Light Blue Donut', 34, 10, 0),
      new Product('assets/images/donuts/orangeDonut.svg', 'Orange Donut', 34, 10, 0),
      new Product('assets/images/donuts/pinkDonut.svg', 'Pink Donut', 34, 0, 10),
      new Product('assets/images/donuts/purpleDonut.svg', 'Purple Donut', 34, 10, 0),
      new Product('assets/images/donuts/violetDonut.svg', 'Violet Donut', 34, 10, 0)
    ];
  }

  getProductList(searchString: string = ""): Observable<Product[]> {
    return this.http.get<Object[]>(`/api/product?q=${searchString}`).pipe(
      map( (value) => value.map(each => plainToClass(Product, each)) )
    )
  }

  addProduct(product: Product): Observable<any> {
    let productExists = this.productArray.find((each: Product) => each.name === product.name);
    if(productExists){
      return throwError({
        msg: "A product with this name already exists"
      })
    }
    else{
      this.productArray.push(product);
      return ObservableOf({
        msg: "Product successfully added"
      })
    }
  }

}
