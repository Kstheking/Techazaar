export class Product {
  public productOnSale!: boolean;
  public productClasses!: any;
  
  constructor(
    public id: number | null,
    public imageSource: string,
    public name: string,
    public price: number,
    public quantity: number,
    public quantityInCart: number
  ) {
  }

}
