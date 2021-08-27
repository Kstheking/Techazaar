import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { SearchProductService } from 'src/app/services/search-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList!: Observable<Product[]>;

  constructor(public productService: ProductService, private searchProductService: SearchProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.searchProductService.queryString.subscribe((query) => {
      this.searchProducts(query);
    })
  }

  trackProduct(index: number, product: Product){
    return product.name;
  }
  
  searchProducts(query: string){
    this.productList = this.productService.getProductList(query);
  }

  getProducts(){
    this.productList = this.productService.getProductList();
  }

}
