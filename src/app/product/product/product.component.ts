import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public productArray!: Array<Product>;

  constructor() {}

  ngOnInit(): void {
    this.productArray = [
      new Product('assets/images/donuts/blueDonut.svg', 'Blue Donut', 34, 10, 0),
      new Product('assets/images/donuts/darkOrangeDonut.svg', 'Dark Orange Donut', 34, 10, 0),
      new Product('assets/images/donuts/greenDonut.svg', 'Green Donut', 34, 10, 0),
      new Product('assets/images/donuts/lightBlueDonut.svg', 'Light Blue Donut', 34, 10, 0),
      new Product('assets/images/donuts/orangeDonut.svg', 'Orange Donut', 34, 10, 0),
      new Product('assets/images/donuts/pinkDonut.svg', 'Pink Donut', 34, 0, 10),
      new Product('assets/images/donuts/purpleDonut.svg', 'Purple Donut', 34, 10, 0),
      new Product('assets/images/donuts/violetDonut.svg', 'Violet Donut', 34, 10, 0)
    ];
  }
}
