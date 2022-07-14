import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  DivHeight,
  DivPokedex,
  DivType,
  DivPokemon,
  LogoPokedex,
  Main,
  NavPokedex,
  SearchInput,
  DivWeight,
  DivHeightWeight,
  DivAttributes,
  DivPokedexLeft,
  DivPokedexRight,
  DivEvolution,
  DivAbout,
  ButtonName,
  DivNames,
  P,
  H2,
} from '../components/styledComponents'
import { Pokemon } from './interface'

interface Pokemons {
  name: string
  url: string
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
      )
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        )
        setPokemons((p) => [...p, poke.data])
      })
    }
    getPokemon()
  }, [])

  const selectPokemon = (id: number) => { // Usar async await
    const shape = axios.get(
      `https://pokeapi.co/api/v2/pokemon-form/${id}`,
    )
    // console.log(shape.data.sprites.front_default)
  }

  return (
    <div>
      <DivPokedex>
        <NavPokedex>
          <LogoPokedex />
          <P>
            Everything you wanted to know about your favorite pocket monsters!
          </P>
          <SearchInput placeholder="Search by name or number" />
          <DivNames>
            {pokemons.map((pokemon) => {
              return (
                <div>
                  <ButtonName onClick={() => selectPokemon(pokemon.id)}>
                    #0{pokemon.id} - {pokemon.name}
                  </ButtonName>
                </div>
              )
            })}
          </DivNames>
        </NavPokedex>
        <Main>
          <DivPokedexLeft>
            <H2></H2>
            <DivPokemon></DivPokemon>
            <DivType></DivType>
            <DivHeightWeight>
              <DivHeight></DivHeight>
              <DivWeight></DivWeight>
            </DivHeightWeight>
            <DivAttributes></DivAttributes>
          </DivPokedexLeft>
          <DivPokedexRight>
            <DivEvolution></DivEvolution>
            <DivAbout></DivAbout>
          </DivPokedexRight>
        </Main>
      </DivPokedex>
    </div>
  )
}

export default Pokedex
