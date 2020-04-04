import styled from 'styled-components'
import Colors from '../../styles/colors';

export const TotalContainer = styled.div`
  align-items: center;
  background-color: ${Colors.grey200};
  border-top: 1px solid ${Colors.grey};
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 30px 20px;
`

export const ClearButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  margin-right: 30px;
`
export const CheckoutButton = styled.button`
  background-color: ${Colors.blue};
  color: ${Colors.white};
  cursor: pointer;
  font-size: 20px;
  margin: 0;
  padding: 10px;
`

export const TotalPrice = styled.div`
  font-weight: 900;
  font-size: 30px;
  margin-right: auto;
  width: 20%;
`
