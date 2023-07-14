import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import InputTask from './components/Input/InputTask'
import TasksList from './components/TaskLIst/TasksList'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  const [tasksList, setTasksList] = useState([])
  // const [tasksList, setTasksList] = useState(localStorage.getItem(tasksList) || [])
  const [taskText, setTaskText] = useState('')

  const addTask = () => {
    if (/\S/gi.test(taskText)) {
      const newTodo = {
        id: 'ID' + Math.floor(Math.random() * 1234),
        text: taskText,
        isCompleted: false,
      }
      const newTodosList = [newTodo, ...tasksList]
      setTasksList(newTodosList)
      setTaskText('')
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') addTask()
  }

  const deleteTask = (event, id) => {
    event.stopPropagation()
    setTasksList(tasksList.filter(el => el.id !== id))
  }

  const completeTask = (event, isCompleted) => {
    event.stopPropagation()
    const id = event.target.id

    // isCompleted default value === false
    if (isCompleted) {
      const uncompletedTask = tasksList.filter(el => el.id === id)[0]
      uncompletedTask.isCompleted = false
      setTasksList([...tasksList])
    } else {
      const completedTask = tasksList.filter(el => el.id === id)[0]
      completedTask.isCompleted = true
      setTasksList([...tasksList])
    }
  }

  return (
    <div className="app">
      <Wrapper>
        <Header />

        <InputTask
          {...{
            value: taskText,
            placeholder: 'Input your task',
            onInput: e => setTaskText(e.target.value),
            onClick: () => addTask(),
            onKeyDown: e => handleKeyDown(e),
          }}
        />

        <TasksList
          {...{
            tasksList,
            setTasksList,
            deleteTask,
            completeTask,
          }}
        />
      </Wrapper>
    </div>
  )
}

export default App
