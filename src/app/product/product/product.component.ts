import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() public product!: Product;
  constructor() { }

  ngOnInit(): void {
    if (this.product.quantity > 0) this.product.productOnSale = true;
    else this.product.productOnSale = false;
    this.product.productClasses = {
      'onSale': this.product.productOnSale,
      'notOnSale': !this.product.productOnSale
    }
  }
}
