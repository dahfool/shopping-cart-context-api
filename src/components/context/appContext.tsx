import React, { createContext, useReducer } from 'react'

import { InitialState, reducer } from '../../reducer'
import { Initial, ActionType } from '../../reducer/index.types'

export const AppContext = createContext<{
  state: Initial;
  dispatch: (action: ActionType) => void;
}>({
  state: InitialState,
  dispatch: () => {}
})

interface Props {
  children: React.ReactNode
}

const AppProvider = ({ children } : Props )=> {
  const [state, dispatch] = useReducer(reducer, InitialState)
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
