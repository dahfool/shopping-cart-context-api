import {
  Actions,
  ClearProductsAction,
  LoadBasketAction,
  RemoveProductsAction,
  UpdateQuantityAction
} from './actions.types'

export const loadBasket = (): LoadBasketAction => ({
  type: Actions.INITIALISE_BASKET
})

export const clearProducts = (): ClearProductsAction => ({
  type: Actions.CLEAR_PRODUCTS
})

export const updateQuantity = (id: number, quantity: number): UpdateQuantityAction => ({
  type: Actions.UPDATE_QUANTITY,
  id,
  quantity
})

export const removeProducts = (id: number): RemoveProductsAction => ({
  type: Actions.REMOVE_PRODUCT,
  id
})

