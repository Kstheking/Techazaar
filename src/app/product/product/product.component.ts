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
      new Product(
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/de90ytx-82d18fa2-b181-4dac-9e75-f975e9a884e7.png/v1/fill/w_1101,h_726,strp/lisa_genshin_impact_transparent_render_png_by_deg5270_de90ytx-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ0IiwicGF0aCI6IlwvZlwvNWU1ODk2YTUtNGE3OS00OTZhLWJlYTQtODFmMjZjZmEyNjUwXC9kZTkweXR4LTgyZDE4ZmEyLWIxODEtNGRhYy05ZTc1LWY5NzVlOWE4ODRlNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pQiXnY2biF8HQ9n8MRuwMDgdh8XvnWGoGOb8OTpsKf4',
        'Lisa',
        34,
        10,
        0
      ),
    ];
  }
}
