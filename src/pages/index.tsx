import { useRouter } from 'next/router'
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

export default function Home() {
  const router = useRouter()

  const submit = (form: Form) => {
    const { email } = form
    if (email === '') throw new Error('Preencha o campo com seu e-mail')
    router.push('/pokedex')
  }

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
