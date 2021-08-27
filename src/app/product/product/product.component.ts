import { Component, Input, OnInit, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, DoCheck {
  @Input() public product!: Product;
  public counter!: Array<number>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.counter = new Array(this.product.quantity);
    this.updateAttributes();
  }

  ngDoCheck(){
    this.counter = new Array(this.product.quantity);
  }

  changeQuantity(qty: number){
    this.product.quantity += qty;
    this.product.quantityInCart -= qty;
    this.productService.changeQuantity(this.product.id, qty).subscribe((result) => {
      console.log(result.msg);
    }, (err) => {
      console.error(err.msg);
    });
    this.updateAttributes();
  }

  updateAttributes(){
    if (this.product.quantity > 0) this.product.productOnSale = true;
    else this.product.productOnSale = false;
    this.product.productClasses = {
      'onSale': this.product.productOnSale,
      'notOnSale': !this.product.productOnSale
    }
  }
}
