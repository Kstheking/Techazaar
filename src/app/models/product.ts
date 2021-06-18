export class Product {
  public productOnSale!: boolean;
  constructor(
    public imageSource: string,
    public name: string,
    public price: number,
    public quantity: number,
    public quantityInCart: number
  ) {
    if (this.quantity > 0) this.productOnSale = true;
    else this.productOnSale = false;
  }

  addToCart() {
    ++this.quantityInCart;
    --this.quantity;
    if (this.quantity == 0) this.productOnSale = false;
  }

  removeFromCart() {
    --this.quantityInCart;
    ++this.quantity;
    if (this.quantity) this.productOnSale = true;
  }
}
