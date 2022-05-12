import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globals';
import NextNProgress from "nextjs-progressbar";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { TopPage } from '../components/TopPage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress options={{showSpinner: false}}  />
      <Header />
      <Component {...pageProps} />
      <TopPage />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default MyApp;
