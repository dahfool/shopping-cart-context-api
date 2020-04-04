import React from 'react'

import { Props } from './Product.types'
import { ProductItem, ProductName, CloseButton, ProductTotal, ProductQuantity } from './Product.styles'

const Product: React.FC<Props> = ({
  name,
  id,
  quantity,
  total_price,
  removeItem,
  updateQuantity,
}) => {
  return (
    <ProductItem>
      <ProductName data-testid='name'>{name}</ProductName>
      <ProductQuantity
        type='number'
        min='0'
        aria-label='product-quantity'
        defaultValue={quantity}
        onChange={(e) => {
          e.preventDefault()
          updateQuantity(id, parseInt(e.target.value))
        }}
      />
      <ProductTotal>{total_price.toFixed(2)}</ProductTotal>
      <CloseButton type='button' onClick={() => removeItem(id)}>&#x2715;</CloseButton>
    </ProductItem>
  )
}

export default Product
