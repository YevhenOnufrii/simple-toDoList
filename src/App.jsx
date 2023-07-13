import { useState } from 'react'
import './App.scss'
import TasksList from './TasksList'
import Header from './components/Header/Header'
import InputTask from './components/Input/InputTask'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  const [tasksList, setTasksList] = useState([])
  const [taskText, setTaskText] = useState('')
  const [completedTasks, setCompletedTasks] = useState([])

  const addTask = () => {
    if (taskText) {
      const newTodo = {
        id: 'ID' + Math.floor(Math.random() * 10000),
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

  // console.log(tasksList)
  // console.log(completedTasks, 'completedTasks')

  const deleteTask = (event, id) => {
    event.stopPropagation()
    setTasksList(tasksList.filter(el => el.id !== id))
  }

  const completeTask = event => {
    event.stopPropagation()
    const id = event.target.id

    if (!completedTasks.some(el => el.id === id)) {
      console.log('COMPLETED')
      const newCompletedTask = tasksList.filter(el => el.id === id)
      newCompletedTask[0].isCompleted = true
      const newCompletedList = [...newCompletedTask, ...completedTasks]
      deleteTask(event, id)
      setCompletedTasks(newCompletedList)
    } else {
      console.log('Uncompleted')
      const newListCompleted = completedTasks.filter(el => el.id !== id)
      const combackTodo = completedTasks.filter(el => el.id === id)
      combackTodo[0].isCompleted = false
      const newTodosList = [...combackTodo, ...tasksList]
      setTasksList(newTodosList)
      setCompletedTasks(newListCompleted)
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
            completedTasks,
            setCompletedTasks,
          }}
        />
      </Wrapper>
    </div>
  )
}

export default App
