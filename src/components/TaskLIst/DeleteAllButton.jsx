import './deleteAllButton.scss'
export default function DeleteAllButton({ title, ...props }) {
  return (
    <div className="deleteAllTodos-box">
      <button className="deleteAllTasks-btn" {...props}>
        {title}
      </button>
    </div>
  )
}
