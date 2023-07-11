import { useState } from 'react'
import './App.scss'
import Header from './Header'
import InputTask from './InputTask'

import TasksList from './TasksList'
import Wrapper from './Wrapper'

function App() {
  const [tasksList, setTasksList] = useState([])
  const [taskText, setTaskText] = useState('')

  const addTask = () => {
    if (taskText) {
      const newTodo = { id: tasksList.length, text: taskText }
      const newTodosList = [newTodo, ...tasksList]
      setTasksList(newTodosList)
      setTaskText('')
      console.log(tasksList)
    }
  }

  return (
    <div className="app">
      <Wrapper>
        <Header />
        <InputTask
          {...{
            value: taskText,
            onInput: e => setTaskText(e.target.value),
            placeholder: 'Input your task',
            onClick: () => addTask(),
          }}
        />
        <TasksList {...{ tasksList, setTasksList: setTasksList }} />
      </Wrapper>
    </div>
  )
}

export default App
