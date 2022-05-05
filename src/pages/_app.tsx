import Style from "../styles/style"
import { GlobalStyles } from "../styles/globalStyle"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="shortcut icon" href="./pokeball.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Style>
        <GlobalStyles />
        <Component {...pageProps} />
      </Style>
    </>
  )
}

export default MyApp
