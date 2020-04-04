import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Product from './Product'

const setup = () => {

  const actions = {
    updateQuantity: jest.fn(),
    removeItem: jest.fn()
  }

  const utils = render(<Product
    name='Ketchup'
    id={1}
    quantity={3}
    total_price={15}
    price={5}
    {...actions}
  />)

  const input: any = utils.getByLabelText('product-quantity')

  return {
    input,
    actions,
    ...utils,
  }
}

describe('Product Component', () => {
  it ('Should have a name', () => {
    const { queryByText } = setup()
    expect(queryByText('Ketchup')).toBeTruthy()
  })

  it ('Should a quantity value', () => {
    const { input } = setup()
    expect(input.value).toBe('3')
  })

  it ('Should have a total price', () => {
    const { queryByText } = setup()
    expect(queryByText('15.00')).toBeTruthy()
  })

  it ('Should fire updateQuanity', () => {
    const { input, actions } = setup()
    fireEvent.change(input, { target: { value: '23' } })
    expect(actions.updateQuantity).toBeCalledWith(1, 23)
  })

  it ('Should fire removeItem', () => {
    const { getByText, actions } = setup()
    getByText(/✕/i).click()
    expect(actions.removeItem).toBeCalledWith(1)
  })

})


