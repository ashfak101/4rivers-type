import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from 'components/shared/customMui'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}> <Component {...pageProps} /></ThemeProvider>
}

export default MyApp
