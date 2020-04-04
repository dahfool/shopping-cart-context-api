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
      <input aria-label='product-quantity' value={quantity} onChange={() => updateQuantity(id, quantity)}/>
      <div>{total_price}</div>
      <button onClick={() => removeItem(id)}>close</button>
    </li>
  )
}

export default Product
