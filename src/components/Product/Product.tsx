import React from 'react'
import { Props } from './Product.types'

const Product: React.FC<Props> = ({
  name,
  id,
  quantity,
  total_price,
  removeItem,
  updateQuantity,
}) => {
  return (
    <li>
      <div data-testid='name'>{name}</div>
      <input
        type='number'
        min='0'
        aria-label='product-quantity'
        defaultValue={quantity}
        onChange={(e) => {
          e.preventDefault()
          updateQuantity(id, parseInt(e.target.value))
        }}
      />
      <div>{total_price}</div>
      <button onClick={() => removeItem(id)}>close</button>
    </li>
  )
}

export default Product
