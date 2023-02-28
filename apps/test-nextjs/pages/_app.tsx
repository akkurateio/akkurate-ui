import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { loveradiusTheme } from "../theme/loveradius"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={loveradiusTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
