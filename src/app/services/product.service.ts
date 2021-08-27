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
  }

  getProductList(searchString: string = ""): Observable<Product[]> {
    return this.http.get<Object[]>(`/api/product?q=${searchString}`).pipe(
      map( (value) => value.map(each => plainToClass(Product, each)) )
    )
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post("/api/product", product);
  }

  changeQuantity(id: number | null, qty: number): Observable<any>{
    return this.http.patch(`/api/product/${id}`, {
      changeInQuantity: qty
    });
  }

}
