import { Product } from '../Product/Product.types'

export interface ProductActions {
  updateQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
}

export interface Props extends ProductActions {
  products: Product[]
}

