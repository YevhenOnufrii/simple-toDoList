import { useState } from 'react'
import { Logger } from 'sass'
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

  // console.log(tasksList)
  // console.log(completedTasks, 'completedTasks')

  const deleteTask = (event, id) => {
    event.stopPropagation()
    setTasksList(tasksList.filter(el => el.id !== id))
  }

  const completeTask = (event, isCompleted) => {
    event.stopPropagation()
    const id = event.target.id

    // isCompleted default value === false
    if (isCompleted) {
      console.log('Uncompleted')
      const uncompletedTask = tasksList.filter(el => el.id === id)[0]
      // deleteTask(event, id)
      uncompletedTask.isCompleted = false
      setTasksList([...tasksList])
    } else {
      console.log('COMPLETED')
      const completedTask = tasksList.filter(el => el.id === id)[0]
      // deleteTask(event, id)
      console.log(tasksList, 'after deletetask')
      completedTask.isCompleted = true
      setTasksList([...tasksList])
    }

    console.log(tasksList)

    // if (!completedTasks.some(el => el.id === id)) {
    //   console.log('COMPLETED')
    //   const completedTask = tasksList.filter(el => el.id === id)[0]
    //   completedTask.isCompleted = true
    //   setCompletedTasks(...tasksList, completedTask)

    // newCompletedTask[0].isCompleted = true

    // const newCompletedTask = tasksList.filter(el => el.id === id)
    // const newCompletedList = [...newCompletedTask, ...completedTasks]
    // deleteTask(event, id)
    // setCompletedTasks(newCompletedList)
    // } else {
    //   console.log('Uncompleted')
    //   const uncompletedTask = tasksList.filter(el => el.id === id)[0]
    //   uncompletedTask.isCompleted = false
    //   setCompletedTasks(uncompletedTask, ...tasksList)

    // setCompletedTasks(
    //   tasksList.sort((a, b) => {
    //     if (a.isCompleted > b.isCompleted) return 1
    //     return -1
    //   })
    // )

    // const newListCompleted = completedTasks.filter(el => el.id !== id)
    // const combackTodo = completedTasks.filter(el => el.id === id)
    // combackTodo[0].isCompleted = false
    // const newTodosList = [...combackTodo, ...tasksList]
    // setTasksList(newTodosList)
    // setCompletedTasks(newListCompleted)
    // }
    // tasksList.sort((a, b) => {
    //   if (a.isCompleted > b.isCompleted) return 1
    //   return -1
    // })
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
