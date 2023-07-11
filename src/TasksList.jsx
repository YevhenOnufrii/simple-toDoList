import { useState } from 'react'
import Container from './Container'

function Task() {
  return (
    <li className="taskBox">
      {/* custom checkbox */}
      <div className="taskBox_customCheckbox">
        <input className="taskBox_input" type="checkbox" id="check" />
        <label htmlFor="check" className="taskBox_label"></label>
      </div>
      {/* <input type="checkbox" className="taskBox_check" />
      <h3 className="taskBox_text">
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
        integer. Duis vel sed fames integer. Duis vel sed fames integer. Duis vel sed fames integer.
      </h3>
      <img src="../public/trash.svg" alt="delete icon" className="taskBox_deleteIcon" /> */}
    </li>
  )
}

function StatusBar() {
  return (
    <>
      <div className="statusBar">
        <div className="createdTasks">
          <h3 className="createdTasks_text status-text">Created tasks</h3>
          <div className="createdTasks_number status-number">
            <span>5</span>
          </div>
        </div>
        <div className="tasksCompleted">
          <h3 className="tasksCompleted_text status-text">Completed</h3>
          <div className="tasksCompleted_numbers status-number">
            <span className="tasksCompleted_number-completed">2 out of 5</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TasksList() {
  return (
    <Container>
      <StatusBar />
      <ul className="tasksList">
        <Task />
      </ul>
    </Container>
  )
}
