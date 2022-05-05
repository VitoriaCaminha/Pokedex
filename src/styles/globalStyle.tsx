import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./style";

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}> `
* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

body {
    font-family: "Roboto";
    background-color: ${({theme}) => theme.colors.primary}
}
`