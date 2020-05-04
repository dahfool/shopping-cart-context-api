import React, { useContext, useEffect } from 'react'

import { Main } from './Main.styles'
import Products from '../Products/Products'
import { AppContext } from '../../context/appContext'
import Total from '../Total/Total'
import {
  loadBasket,
  clearProducts as clear,
  updateQuantity as update,
  removeProducts
} from '../../actions/actions'

export default () => {
  const { state: { products, total }, dispatch } = useContext(AppContext)

  useEffect(() => {
    dispatch(loadBasket())
  }, []);

  const clearProducts = () => {
    dispatch(clear())
  }

  const updateQuantity = (id: number, quantity:number) => {
    dispatch(update(id, quantity))
  }

  const removeItem = (id: number) => {
    dispatch(removeProducts(id))
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

