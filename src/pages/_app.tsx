import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globals';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress options={{showSpinner: false}}  />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp;
