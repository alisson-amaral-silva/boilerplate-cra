import React from 'react'
import * as S from './style'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export type MainProps = {
  title?: string
  description?: string
}

function Main({
  title = 'Kingdom Hearts',
  description = 'Greatest Game Ever'
}: MainProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.Wrapper>
          <header className="App-header">
            <img
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
              className="App-logo"
              alt="logo"
            />
            <p>{title}</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {description}
            </a>
          </header>
        </S.Wrapper>
      </ThemeProvider>
    </>
  )
}

export default Main
