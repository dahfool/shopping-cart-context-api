import React from 'react'
import { render } from '@testing-library/react'

import Products from './Products'

const fixtures = [
  {
    id: 1,
    name: 'Ketchup',
    quantity: 5,
    price: 10,
    total_price: 10
  },
  {
    id: 2,
    name: 'Bake Beans',
    quantity: 7,
    price: 80,
    total_price: 80
  }
]

const setup = () => {

  const actions = {
    updateQuantity: jest.fn(),
    removeItem: jest.fn()
  }

  const utils = render(<Products
    products={fixtures}
    {...actions}
  />)


  return {
    actions,
    ...utils,
  }
}

describe('Products Component', () => {
  it ('Should render names', () => {
    const { getAllByTestId } = setup()
    const contactNames = getAllByTestId('name').map(li => li.textContent)
    const fakeContactNames = fixtures.map(c => c.name)
    expect(contactNames).toEqual(fakeContactNames)
  })
})


