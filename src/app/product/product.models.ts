
export enum Category {
  'CAR',
  'KITCHEN',
  'HOME'
}

export interface ProductItem {
  name: String
  description: String
  price: Number
  category: Category
  isAvailable: Boolean
}