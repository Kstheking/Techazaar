import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'create-product-reactive',
  templateUrl: './create-product-reactive.component.html',
  styleUrls: ['./create-product-reactive.component.css']
})
export class CreateProductReactiveComponent implements OnInit {
  public productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      url: [null, [Validators.required, Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)]],
      onSale: [false]
    });
   }

  get name(){
    return this.productForm.get('name');
  }

  get price(){
    return this.productForm.get('price');
  }

  get url(){
    return this.productForm.get('url');
  }

  get onSale(){
    return this.productForm.get('onSale');
  }

  resetForm(){
    this.productForm.setValue({
      name: null,
      price: 0,
      url: '',
      onSale: false
    })
  }

  submitForm(){
    if(this.productForm.valid){
      this.productService.addProduct(new Product(
        this.url?.value, this.name?.value, this.price?.value, this.onSale?.value? 10 : 0, !this.onSale?.value? 10: 0
      )).subscribe((result: any)=>{
        console.log(result.msg); //maybe we can add a message service which displays these notifs
        this.resetForm();
      }, (err: any) => {
        console.log(err.msg);
      })
    }
    else{
      console.log(this.productForm.errors);
    }
  }

  ngOnInit(): void {
  }

}
