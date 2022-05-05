import { DivHeight } from "../components/divHeight";
import { DivPokedex } from "../components/divPokedex";
import { DivType } from "../components/divType";
import { H2 } from "../components/h2";
import { DivPokemon } from "../components/divPokemon";
import { LogoPokedex } from "../components/logoPokedex";
import { Main } from "../components/main";
import { NavPokedex } from "../components/navPokedex";
import { P } from "../components/p";
import { SearchInput } from "../components/searchInput";
import { DivWeight } from "../components/divWeight";
import { DivHeightWeight } from "../components/divHeightWeight";
import { DivAttributes } from "../components/divAttributes";
import { DivPokedexLeft } from "../components/divPokedexLeft";
import { DivPokedexRight } from "../components/divPokedexRight";
import { DivEvolution } from "../components/divEvolution";
import { DivAbout } from "../components/divAbout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "./interface";
import { Button } from "../components/button";
import { ButtonName } from "../components/buttonName";
import { DivNames } from "../components/divNames";

interface Pokemons {
    name: string;
    url: string;
}

const Pokedex: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=0&offset=0")
            res.data.results.forEach(async (pokemon: Pokemons) => {
                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                setPokemons((p) => [...p, poke.data])
            })
        }
        getPokemon();
    }, [])

    const selectPokemon = (id: number) => {
        console.log(id)
    }

    return (
        <div>
            <DivPokedex>
                <NavPokedex>
                    <LogoPokedex />
                    <P>Everything you wanted to know about your favorite pocket monsters!</P>
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
                        <H2>#001 - BULBASAUR</H2>
                        <DivPokemon>
                        </DivPokemon>
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

export default Pokedex;