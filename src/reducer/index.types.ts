import { Product } from '../components/Product/Product.types'

export enum Actions {
  UPDATE_QUANTITY,
  REMOVE_PRODUCT,
  CLEAR_PRODUCTS,
  INITIALISE_BASKET
}

export interface Initial {
  products: Product[]
  basket: Product[]
  total: number
}

export interface ActionType {
  type: Actions
  id?: number
  quantity?: number
}
