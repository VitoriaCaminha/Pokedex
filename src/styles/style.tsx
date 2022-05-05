import { ThemeProvider } from "styled-components";

const fontSize = [12]

const primary = "#FDFDFE" //background

const theme = {
    fontSize,
    colors: {
        primary
    }
}

export type ThemeType = typeof theme;

export default function Style({children}) {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}