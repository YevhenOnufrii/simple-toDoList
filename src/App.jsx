import { useState } from 'react'
import './App.scss'
import Header from './Header'
import InputTask from './InputTask'

import TasksList from './TasksList'
import Wrapper from './Wrapper'

function App() {
  const [taskText, setTaskText] = useState('')
  console.log(taskText)

  return (
    <div className="app">
      <Wrapper>
        <Header />
        <InputTask {...{ value: taskText, onInput: e => setTaskText(e.target.value) }} />
        <TasksList />
      </Wrapper>
    </div>
  )
}

export default App
