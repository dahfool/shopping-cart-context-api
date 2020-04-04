import { InitialState, reducer } from './'
import { Actions } from './index.types'

describe('Reducer', () => {

  it('Should clear products', () => {
    expect(reducer(InitialState, { type: Actions.CLEAR_PRODUCTS})).toEqual({
      products: [],
      total: 0
    })
  })

  it('Should remove products', () => {
    expect(reducer(InitialState, { type: Actions.REMOVE_PRODUCT, id: 1})).toEqual({
      products: [
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
      total: 28.9
    })
  })

  it('Should update quantity', () => {
    expect(reducer(InitialState, { type: Actions.UPDATE_QUANTITY, id: 1, quantity: 4})).toEqual({
      products: [
        {
          id: 1,
          name: 'Mountain Dew',
          quantity: 4,
          price: 1.80,
          total_price: 7.2
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
      total: 36.1
    })
  })


})
