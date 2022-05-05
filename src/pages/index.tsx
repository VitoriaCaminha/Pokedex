import { Button } from "../components/button"
import { Container } from "../components/div"
import { Img } from "../components/pokeball"
import { Input } from "../components/input"
import { Nav } from "../components/nav"
import { LogoPokedex } from "../components/logoPokedex"
import { IconSettings } from "../components/iconSettings"

function submit() {
  var email = document.getElementById("email")
  if (email.value == "") {
    alert("Preencha o campo com seu e-mail")
  } else {
    window.location.href = "./pokedex"
  }
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
        <Input id="email" type="email" placeholder="Seu melhor e-mail" required />
        <Button onClick={submit}>Acessar</Button>
      </Container>
    </div>
  )
}