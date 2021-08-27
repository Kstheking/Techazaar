import { Component, OnInit, Output } from '@angular/core';
import { SearchProductService } from 'src/app/services/search-product.service';

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  public query!: string;

  constructor(private searchProductService: SearchProductService) {
  }

  ngOnInit(): void {
  }

  searchProduct(){
    this.searchProductService.query.next(this.query);
  }

}
