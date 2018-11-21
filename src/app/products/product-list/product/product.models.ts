
export enum Category {
  'Car',
  'Kitchen',
  'Home'
}

export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public availability: boolean,
    public category?: Category,
    public updatedDate?: number,
  ) {

  }
}
