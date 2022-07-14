import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

type ButtonProps = TypographyProps;

export const Button = styled.button<ButtonProps>`
    background-color: #0F54D1;
    color: #FFFFFF;
    cursor: pointer;
    padding: 13px 50px;
    border-radius: 3px;
    display: flex;
    margin: 0 235px 0 0;
    ${typography}
`;

export const ButtonName = styled.button`
    background-color: #DD4A49;
    font-size: 1.3vw;
    font-weight: 100;
    color: #FFFFFF;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: inline;
`

export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DivAbout = styled.div`
    display: flex;
    justify-content: center;
    padding: 25vh;
    background-color: #FFFFFF;
    width: 38vw;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const DivAttributes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3vh 0 0 0;
    padding: 6vh;
    background-color: #FFFFFF;
    width: 28vw;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const DivEvolution = styled.div`
    display: flex;
    justify-content: center;
    margin: 8vw 0 2vw 0;
    padding: 7vh;
    background-color: #FFFFFF;
    width: 38vw;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const DivHeight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3vh 2vh 0 0;
    padding: 1.5vh;
    background-color: #FFFFFF;
    width: 13vw;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const DivHeightWeight = styled.div`
    display: flex;
    flex-direction: row;
    `

export const DivNames = styled.div`
display: flex;
justify-content: center;
float: none;
display: inline-block;
margin: 3vh 2vh 0 1vh;
padding: 1.5vh;
width: 17.4vw;
height: 65vh;
overflow: auto;
::-webkit-scrollbar {
    background-color: #FFFFFF;
    width: 0.5vw;
    border-radius: 5px;      
}
`

export const DivPokedex = styled.div`
    display: flex;
    flex-direction: row;
`

export const DivPokedexLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 5vw;
`

export const DivPokedexRight = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
`

export const DivPokemon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vh 0 0 0;
    padding: 19vh;
    background-color: #FFFFFF;
    width: 28vw;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const DivType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3vh 0 0 0;
    padding: 1.5vh;
    background-color: #FFFFFF;
    width: 28vw;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const DivWeight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3vh 0 0 0;
    padding: 1.5vh;
    background-color: #FFFFFF;
    width: 14vw;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const H2 = styled.h2`
    color: #FFF3F2;
    font-size: 3vw;
    margin: 2vw 0 2vw 0;
    font-weight: normal;
`

export const IconSettings = () => <img src="settings.svg" width="30px" height="30px" />;

export const Input = styled.input`
    background-color: transparent;
    padding: 12px 200px 12px 13px;
    margin: 20px;
    border: solid 1px #EFEEF1;
    border-radius: 2px;
`

export const LogoPokedex = () => <img src="logo-pokedex.png" />;

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #00B5EB;
    width: 80vw;
    height: 100vh;
`

export const Nav = styled.div`
    background-color: #DD4A49;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;
`

export const NavPokedex = styled.div`
    height: 100vh;
    background-color: #DD4A49;
    padding: 50px 40px;
    float:left;
    max-width: 20vw;
`

export const P = styled.p`
    color: #FFF3F2;
    font-size: 110%;
    text-align: center;
`

export const Img = () => <img src="pokeball.svg" />;

export const SearchInput = styled.input`
    background-color: #FFFFFF;
    padding: 0.5vw 5vw 0.5vw 0.7vw;
    margin: 2vw 0 0.5vw 0.6vw;
    border: solid 1px #EFEEF1;
    border-radius: 25px;
    background-image: url(search.png);
    background-repeat: no-repeat;
    background-position: 13vw;
    background-size: 1vw;
`