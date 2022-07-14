import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Button,
  Container,
  Img,
  Input,
  Nav,
  LogoPokedex,
  IconSettings,
} from '../components/styledComponents'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  const submit = () => {
    if (email === '') {
      alert('Preencha o campo com seu e-mail')
    } else {
      router.push('/pokedex')
    }
  }

  return (
    <div>
      <Nav>
        <LogoPokedex />
        <IconSettings />
      </Nav>
      <Container>
        <Img />
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
        />
        <Button onClick={() => submit()}>Acessar</Button>
      </Container>
    </div>
  )
}
