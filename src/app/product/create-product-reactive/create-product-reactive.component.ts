import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-product-reactive',
  templateUrl: './create-product-reactive.component.html',
  styleUrls: ['./create-product-reactive.component.css']
})
export class CreateProductReactiveComponent implements OnInit {
  public productForm!: FormGroup;

  constructor(private fb: FormBuilder) {
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

  submitForm(){
    if(this.productForm.valid){
      console.log(this.productForm.value);
    }
    else{
      console.log(this.productForm.errors);
    }
  }

  ngOnInit(): void {
  }

}
