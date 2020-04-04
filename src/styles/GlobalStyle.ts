import { createGlobalStyle } from 'styled-components'
import Colors from './colors'

export default createGlobalStyle`
  body {
    background: ${Colors.grey};
  }
`
