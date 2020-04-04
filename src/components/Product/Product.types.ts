import { ProductActions } from '../Products/Products.types'

export interface Product {
  name: string
  id: number,
  quantity: number,
  price: number,
}

export interface Props extends ProductActions, Product {}
