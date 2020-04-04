import styled from 'styled-components'
import Colors from "../../styles/colors";

export const ProductItem = styled.li`
  align-items: center;
  display: flex;
  list-style-type: none;
  padding: 30px 0;
  border-bottom: 1px dashed ${Colors.grey};
  justify-content: center;
  
  &:last-child {
    border-bottom: 0;
  }
`

export const ProductName = styled.div`
  margin-right: auto;
  width: 20%;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${Colors.grey};
  cursor: pointer;
  font-size: 20px;
  margin: 0;
`

export const ProductTotal = styled.div`
  color: #ffa500;
  font-weight: 500;
  margin-left: auto;
  width: 10%;
`

export const ProductQuantity = styled.input`
  margin-left: auto;
  padding: 5px;
  width: 30px;
`
