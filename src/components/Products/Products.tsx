import React from 'react'

import { Props } from './Products.types'
import Product from '../Product/Product'
import { ProductList } from './Products.styles'

const Products: React.FC<Props> = ({
  products,
  updateQuantity,
  removeItem
}) => {
  return (
    <ProductList>
      {products.map((item) =>
          <Product
            key={item.id}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            {...item}
          />
      )}
    </ProductList>
  )
}

export default Products
