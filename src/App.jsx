import './App.scss'
import Container from './Container'
import Logo from './Logo'
import Wrapper from './Wrapper'

function App() {
  return (
    <div className="app">
      <Wrapper>
        <Container>
          <Logo />
        </Container>
      </Wrapper>
    </div>
  )
}

export default App
