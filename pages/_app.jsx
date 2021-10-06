import React from 'react'
import Head from 'next/head'

//import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>COE Paulo Freire</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp