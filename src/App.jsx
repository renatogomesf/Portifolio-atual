import React from 'react'
import Header from './components/header/Header'
import Presentation from './components/main/Presentation'
import styled from 'styled-components'

const AppComponent = styled.div`

  & section {
    display: flex;
  }
`

const App = () => {
  return (
    <AppComponent>
      <section>
        <Header />
        <div>
          <Presentation />
        </div>
      </section>
    </AppComponent>
  )
}

export default App
