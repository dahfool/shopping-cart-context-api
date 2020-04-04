import React from 'react'
import { Props } from './Total.types'

const Total: React.FC<Props> = ({
  totalAmount,
  checkout,
  clearProducts
}) => {
  return (
    <>
      <div>{totalAmount}</div>
      <button onClick={() => clearProducts()}>Clear</button>
      <button onClick={() => checkout()}>Check Out</button>
    </>
  )
}

export default Total
