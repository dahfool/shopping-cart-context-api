export enum Actions {
  UPDATE_QUANTITY,
  REMOVE_PRODUCT,
  CLEAR_PRODUCTS,
  INITIALISE_BASKET
}

export interface LoadBasketAction {
  type: Actions.INITIALISE_BASKET
}

export interface ClearProductsAction {
  type: Actions.CLEAR_PRODUCTS
}

export interface UpdateQuantityAction {
  type: Actions.UPDATE_QUANTITY
  id: number
  quantity: number
}

export interface RemoveProductsAction {
  type: Actions.REMOVE_PRODUCT
  id: number
}

export type ProductActionTypes = LoadBasketAction | ClearProductsAction | UpdateQuantityAction | RemoveProductsAction
