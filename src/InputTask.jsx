import Container from './Container'

export default function InputTask() {
  return (
    <div className="inputTask">
      <Container>
        <input type="text" className="inputTask_input" />
        <button type="button" className="inputTask_button">
          Create
        </button>
      </Container>
    </div>
  )
}
