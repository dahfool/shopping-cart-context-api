import { Initial } from './index.types'
import { Actions, ProductActionTypes } from '../actions/actions.types'

export const InitialState: Initial = {
  products: [],
  basket: [
    {
      id: 1,
      name: 'Mountain Dew',
      quantity: 2,
      price: 1.80,
      total_price: 3.60
    },
    {
      id: 2,
      name: 'Desperados',
      quantity: 6,
      price: 2.60,
      total_price: 15.50
    },
    {
      id: 3,
      name: 'Jack Daniels',
      quantity: 4,
      price: 3.35,
      total_price: 13.40
    }
  ],
  total: 0
}

export const reducer = (
  state: Initial,
  action: ProductActionTypes
) => {
  switch (action.type) {
    case Actions.INITIALISE_BASKET:

      const basketTotal = state.basket
        .map(item => item.total_price)
        .reduce((prev, curr) => prev + curr, 0);

      return {
        ...state,
        products: state.basket,
        total: basketTotal
      }
    case Actions.CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
        total: 0
      }
    case Actions.REMOVE_PRODUCT:
      const itemRemoved = state.products.find(x => x.id === action.id)
      return {
        ...state,
        products: state.products.filter(x => x.id !== action.id),
        total: itemRemoved ? state.total - itemRemoved.total_price : state.total
      }
    case Actions.UPDATE_QUANTITY:
      const quantity = action.quantity ? action.quantity: 0
      const newData = state.products.map(obj => {
        if (obj.id === action.id)
          return {
            ...obj,
            quantity,
            total_price: quantity*obj.price
          }
        return obj
      })

      const total = newData
        .map(item => item.total_price)
        .reduce((prev, curr) => prev + curr, 0);

      return {
        ...state,
        products: newData,
        total: total
      }
    default:
      return state
  }
}
