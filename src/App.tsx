import React from 'react'

import AppProvider from './context/appContext'
import GlobalStyle from './styles/GlobalStyle'
import Main from './components/Main/Main'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Main/>
      </AppProvider>
    </>
  )
}

export default App;
