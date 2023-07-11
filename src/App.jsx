import { useState } from 'react'
import './App.scss'
import Header from './Header'
import InputTask from './InputTask'
import TasksList from './TasksList'
import Wrapper from './Wrapper'

function App() {
  const [tasksList, setTasksList] = useState([])
  const [taskText, setTaskText] = useState('')
  const [completedTasks, setCompletedTasks] = useState([])

  const addTask = () => {
    if (taskText) {
      const newTodo = { id: tasksList.length, text: taskText }
      const newTodosList = [newTodo, ...tasksList]
      setTasksList(newTodosList)
      setTaskText('')
    }
  }
  console.log(tasksList)
  console.log(completedTasks, 'completedTasks')

  const deleteTask = (event, id) => {
    console.log('Hola')
    event.stopPropagation()
    setTasksList(tasksList.filter(el => el.id !== id))
  }

  const completeTask = event => {
    // event.stopPropagation()
    const id = parseInt(event.target.id)
    const newCompletedTask = tasksList.filter(el => el.id === id)
    const newCompletedList = [newCompletedTask, ...completedTasks]
    setCompletedTasks(newCompletedList)
    deleteTask(event, id)
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

        <TasksList
          {...{
            tasksList,
            setTasksList: setTasksList,
            deleteTask: deleteTask,
            completeTask: completeTask,
            completedTasks: completedTasks,
          }}
        />
      </Wrapper>
    </div>
  )
}

export default App
