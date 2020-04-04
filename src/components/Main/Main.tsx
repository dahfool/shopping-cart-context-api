import React, { useContext } from 'react'

import Products from '../Products/Products'
import { AppContext } from '../../context/appContext'
import Total from "../Total/Total";

export default () => {
  const { state: { products, total } } = useContext(AppContext)

  return (
    <div>
      <Products
        products={products}
        updateQuantity={() => {}}
        removeItem={() => {}}
      />
      <Total totalAmount={total} clearProducts={() => {}} checkout={() => {}}/>
    </div>
  );
};

