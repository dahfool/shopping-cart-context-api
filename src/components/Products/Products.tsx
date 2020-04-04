import React from 'react'
import { Props } from './Products.types'
import Product from '../Product/Product'

const Products: React.FC<Props> = ({
  products,
  updateQuantity,
  removeItem
}) => {
  return (
    <>
      {products.map((item) =>
          <Product
            key={item.id}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            {...item}
          />
      )}
    </>
  )
}

export default Products
