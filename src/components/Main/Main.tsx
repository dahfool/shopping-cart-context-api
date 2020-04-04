import React, {useContext} from 'react'

import Products from '../Products/Products'
import {AppContext} from '../../context/appContext'
import Total from '../Total/Total'
import { Actions } from '../../reducer/index.types'

export default () => {
  const { state: { products, total }, dispatch } = useContext(AppContext)

  const clearProducts = () => {
    dispatch({
      type: Actions.CLEAR_PRODUCTS
    })
  }

  return (
    <div>
      <Products
        products={products}
        updateQuantity={() => {}}
        removeItem={() => {}}
      />
      <Total
        totalAmount={total}
        clearProducts={clearProducts}
        checkout={() => {}}
      />
    </div>
  );
};

