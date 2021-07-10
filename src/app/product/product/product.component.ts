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

  }
}
