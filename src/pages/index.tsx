import {
  Button,
  Container,
  Img,
  Input,
  Nav,
  LogoPokedex,
  IconSettings,
} from '../components/styledComponents'

interface Form {
  email: string
}

const submit = (form: Form) => {
  const { email } = form
  if (email === '') throw new Error('Preencha o campo com seu e-mail')
  return (window.location.href = '/pokedex')
}

export default function Home() {
  return (
    <div>
      <Nav>
        <LogoPokedex />
        <IconSettings />
      </Nav>
      <Container>
        <Img />
        <Input id="email" type="email" placeholder="Seu melhor e-mail" />
        <Button onClick={() => submit}>Acessar</Button>
      </Container>
    </div>
  )
}
