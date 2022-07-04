import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from 'components/shared/customMui'
import ToggleColorMode from 'components/shared/ToggleColorMode'

function MyApp({ Component, pageProps }: AppProps) {
  return <ToggleColorMode > <Component {...pageProps} /></ToggleColorMode>
}

export default MyApp
