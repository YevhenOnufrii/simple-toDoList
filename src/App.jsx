import './App.scss'
import Header from './Header'
import InputTask from './InputTask'

import Wrapper from './Wrapper'

function App() {
  return (
    <div className="app">
      <Wrapper>
        <Header />
        <InputTask />
      </Wrapper>
    </div>
  )
}

export default App
