import React from 'react'

import { Props } from './Total.types'
import { TotalContainer, ClearButton, TotalPrice, CheckoutButton } from './Total.styles'

const Total: React.FC<Props> = ({
  totalAmount,
  checkout,
  clearProducts
}) => {
  return (
    <TotalContainer>
      <TotalPrice>{totalAmount.toFixed(2)}</TotalPrice>
      <ClearButton onClick={() => clearProducts()}>Clear</ClearButton>
      <CheckoutButton onClick={() => checkout()}>Check Out &#10095;</CheckoutButton>
    </TotalContainer>
  )
}

export default Total
