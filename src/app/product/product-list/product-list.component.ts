import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList!: Observable<Product[]>;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }

  trackProduct(index: number, product: Product){
    return product.name;
  }

}
