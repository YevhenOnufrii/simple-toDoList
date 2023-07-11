import { useState } from 'react'
import Container from './Container'

function Clipboard() {
  return (
    <div className="clipboard">
      <div className="clipboard_image">
        <img src="../public/сlipboard.svg" alt="clipboard" />
      </div>
      <h3 className="clipboard_title">
        You don't have any tasks registered yet <br />
        <span>Create tasks and organize your to-do items</span>
      </h3>
    </div>
  )
}

function Task({ id, text }) {
  return (
    <li className="taskBox">
      {/* custom checkbox */}
      <div className="taskBox_customCheckbox">
        <input className="taskBox_input" type="checkbox" id={id} />
        <label htmlFor={id} className="taskBox_label"></label>
      </div>
      {/* task text */}
      <h3 className="taskBox_text">{text}</h3>
      <img src="../public/trash.svg" alt="delete icon" className="taskBox_deleteIcon" />
    </li>
  )
}

function StatusBar({ totalTodos }) {
  return (
    <>
      <div className="statusBar">
        <div className="createdTasks">
          <h3 className="createdTasks_text status-text">Created tasks</h3>
          <div className="createdTasks_number status-number">
            <span>{totalTodos}</span>
          </div>
        </div>
        <div className="tasksCompleted">
          <h3 className="tasksCompleted_text status-text">Completed</h3>
          <div className="tasksCompleted_numbers status-number">
            <span className="tasksCompleted_number-completed">2 out of {totalTodos}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TasksList({ tasksList, setTasksList }) {
  console.log(tasksList, 'TasksList')
  return (
    <Container>
      <StatusBar {...{ totalTodos: tasksList.length }} />
      {!tasksList.length && <Clipboard />}

      {!!tasksList.length && (
        <div className="deleteAllTodos-box">
          <button className="deleteAllTasks-btn" onClick={() => setTasksList([])}>
            Delete all tasks
          </button>
        </div>
      )}

      <ul className="tasksList">
        {tasksList.map(el => (
          <Task key={el.id} {...el} />
        ))}
      </ul>
    </Container>
  )
}
