import {
  clearProducts,
  loadBasket,
  updateQuantity,
  removeProducts
} from './actions'
import { Actions } from './actions.types'

describe('Actions', () => {
  it('loadBasket', () => {
    expect(loadBasket()).toEqual({
      type: Actions.INITIALISE_BASKET
    })
  })

  it('clearProducts', () => {
    expect(clearProducts()).toEqual({
      type: Actions.CLEAR_PRODUCTS
    })
  })

  it('updateQuantity', () => {
    expect(updateQuantity(10, 50)).toEqual({
      type: Actions.UPDATE_QUANTITY,
      id: 10,
      quantity: 50
    })
  })

  it('removeProducts', () => {
    expect(removeProducts(3)).toEqual({
      type: Actions.REMOVE_PRODUCT,
      id: 3,
    })
  })
})
