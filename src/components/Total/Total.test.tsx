import React from 'react'
import { render } from '@testing-library/react'

import Total from './Total'

const setup = () => {

  const actions = {
    clearProducts: jest.fn(),
    checkout: jest.fn()
  }

  const utils = render(<Total
    totalAmount={344}
    {...actions}
  />)


  return {
    actions,
    ...utils,
  }
}

describe('Total Component', () => {
  it ('Should render total amount', () => {
    const { queryByText } = setup()
    // expect(queryByText('344.00')).toBeTruthy()
    expect(queryByText('344.00')).toBeInTheDocument();
  })

  it ('Should fire updateQuanity', () => {
    const { actions, getByText } = setup()
    getByText(/Clear/i).click()
    expect(actions.clearProducts).toBeCalled()
  })

  it ('Should fire updateQuanity', () => {
    const { getByText, actions } = setup()
    getByText(/Check Out/i).click()
    expect(actions.checkout).toBeCalled()
  })
})


