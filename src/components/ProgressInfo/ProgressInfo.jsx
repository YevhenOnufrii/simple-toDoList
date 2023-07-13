import './progressInfo.scss'
export default function ProgressInfo({ totalTodos, completedTodos = 0 }) {
  return (
    <>
      <div className="statusBar">
        <div className="createdTasks">
          <h3 className="createdTasks_text status-text">Created tasks</h3>
          <div className="createdTasks_number status-number">
            <span>{totalTodos + completedTodos}</span>
          </div>
        </div>
        <div className="tasksCompleted">
          <h3 className="tasksCompleted_text status-text">Completed</h3>
          <div className="tasksCompleted_numbers status-number">
            <span className="tasksCompleted_number-completed">
              {completedTodos} of {totalTodos + completedTodos}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
