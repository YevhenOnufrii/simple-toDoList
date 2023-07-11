import Container from './Container'

export default function InputTask({ placeholderText = 'Input your task', ...props }) {
  return (
    <div className="inputBlock">
      <Container>
        <div className="inputTask">
          <input {...props} type="text" className="inputTask_input" placeholder={placeholderText} />
          <button type="button" className="inputTask_button">
            Create
          </button>
        </div>
      </Container>
    </div>
  )
}
