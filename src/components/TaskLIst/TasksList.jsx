import Clipboard from '../Clipboard/Clipboard'
import Container from '../Container_/Container'
import ProgressInfo from '../ProgressInfo/ProgressInfo'
import DeleteAllButton from './DeleteAllButton'
import Task from './Task'
import './tasksList.scss'

export default function TasksList({ tasksList, setTasksList, deleteTask, completeTask }) {
  // sort list with todos, for correct tasks display
  tasksList.sort((a, b) => {
    if (a.isCompleted > b.isCompleted) return 1
    return -1
  })

  const progressInfoProps = {
    totalTodos: tasksList.length,
    completedTodos: tasksList.reduce((acc, el) => (el.isCompleted ? (acc += 1) : 0), 0),
  }

  return (
    <Container>
      <ProgressInfo {...progressInfoProps} />
      {/* if tasks list is not empty */}
      {!!tasksList.length && (
        <DeleteAllButton
          {...{ type: 'button', title: 'Delete all tasks', onClick: () => setTasksList([]) }}
        />
      )}

      <ul className="tasksList">
        {/* TODO LIST*/}
        {tasksList.map(el => (
          <Task key={el.id} {...{ ...el }} deleteTask={deleteTask} completeTask={completeTask} />
        ))}
      </ul>

      {/* CLIPBOARD */}
      {!tasksList.length && <Clipboard />}
    </Container>
  )
}
