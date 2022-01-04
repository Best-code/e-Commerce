import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Button from '@mui/material/Button'
import DeleteIcon from "@mui/icons-material/Delete"
import Hero from "../components/tailwind_components/hero"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <SessionProvider>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <Hero />
      <Component {...pageProps} />
    </SessionProvider>
  </div>
}

export default MyApp
