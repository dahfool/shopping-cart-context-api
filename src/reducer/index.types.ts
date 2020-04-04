import { Product } from '../components/Product/Product.types'

export enum Actions {
  UPDATE_QUANTITY,
  REMOVE_PRODUCT,
  CLEAR_PRODUCTS
}

export interface Initial {
  products: Product[]
  total: number
}

export interface ActionType {
  type: Actions
  id?: number
  quantity?: number
}
