import React, { useContext } from 'react'

import { Main } from './Main.styles'
import Products from '../Products/Products'
import { AppContext } from '../../context/appContext'
import Total from '../Total/Total'
import { Actions } from '../../reducer/index.types'

export default () => {
  const { state: { products, total }, dispatch } = useContext(AppContext)

  const clearProducts = () => {
    dispatch({
      type: Actions.CLEAR_PRODUCTS
    })
  }

  const updateQuantity = (id: number, quantity:number) => {
    dispatch({
      type: Actions.UPDATE_QUANTITY,
      id,
      quantity
    })
  }

  const removeItem = (id: number) => {
    dispatch({
      type: Actions.REMOVE_PRODUCT,
      id,
    })
  }

  return (
    <Main>
      <Products
        products={products}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      <Total
        totalAmount={total}
        clearProducts={clearProducts}
        checkout={() => {}}
      />
    </Main>
  );
};

