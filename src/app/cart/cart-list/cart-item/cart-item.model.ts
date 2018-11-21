import { ProductModel } from '../../../products/product-list/product/product.models';


export class CartItemModel extends ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public availability: boolean,
    public quantity: number,
    public category?: ProductModel['category'],

  ) {
    super(id, name, description, price, availability, category);
  }
}

export enum CartActions {
  'REMOVE',
  'INCREASE',
  'DECREASE'
}

export class CartEventModel {
  constructor(
    public action: CartActions,
    public item: CartItemModel
  ) {
  }
}
