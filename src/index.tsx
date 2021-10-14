import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
