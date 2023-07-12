import Container from '../Container_/Container'
import './inputTask.scss'

export default function InputTask({ onClick, ...props }) {
  return (
    <div className="inputBlock">
      <Container>
        <div className="inputTask">
          <input {...props} type="text" className="inputTask_input" />
          <button type="button" className="inputTask_button" onClick={onClick}>
            Create
          </button>
        </div>
      </Container>
    </div>
  )
}
