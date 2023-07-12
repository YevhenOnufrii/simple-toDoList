import Container from '../Container_/Container'
import Logo from './Logo'
import './header.scss'

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Logo />
      </Container>
    </div>
  )
}
