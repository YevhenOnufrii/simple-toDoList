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
    setCompletedTasks(completedTasks.filter(el => el.id !== id))
  }

  const completeTask = event => {
    event.stopPropagation()
    // const id = parseInt(event.target.id)
    const id = event.target.id

    // const task = event.target.parentElement.parentElement
    // console.log(task)
    if (!completedTasks.some(el => el.id === id)) {
      console.log('COMPLETED')
      const newCompletedTask = tasksList.filter(el => el.id === id)
      const newCompletedList = [...newCompletedTask, ...completedTasks]
      deleteTask(event, id)
      setCompletedTasks(newCompletedList)
      // task.classList.add('completedTaskStyles')
      //classList.add("mystyle")
    } else {
      console.log('Uncompleted')
      const newListCompleted = completedTasks.filter(el => el.id !== id)
      const combackTodo = completedTasks.filter(el => el.id === id)
      const newTodosList = [...combackTodo, ...tasksList]
      setTasksList(newTodosList)
      setCompletedTasks(newListCompleted)
      // task.classList.remove('completedTaskStyles')
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
