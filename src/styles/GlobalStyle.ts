import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Colors from './colors'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
  
  ${reset}
  
  body {
    background: ${Colors.grey};
    color: ${Colors.grey100};
    font-family: Roboto, sans-serif;
  }
`
