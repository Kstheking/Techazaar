export class Product {
  public productOnSale!: boolean;
  public productClasses!: any;
  
  constructor(
    public imageSource: string,
    public name: string,
    public price: number,
    public quantity: number,
    public quantityInCart: number
  ) {
  }

  updateAttributes(){
    if (this.quantity > 0) this.productOnSale = true;
    else this.productOnSale = false;

    this.productClasses = {
      'onSale': this.productOnSale,
      'notOnSale': !this.productOnSale
    }
  }

  addToCart() {
    ++this.quantityInCart;
    --this.quantity;
    this.updateAttributes();
  }

  removeFromCart() {
    --this.quantityInCart;
    ++this.quantity;
    this.updateAttributes();
  }

  counter(count: number){
    return new Array(count);
  }

  selectQuantity(qty: number){
    this.quantityInCart += qty;
    this.quantity -= qty;
    this.updateAttributes();
  }
}
