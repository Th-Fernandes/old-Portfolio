import type { AppProps } from 'next/app';
import Head from 'next/head';
import {GlobalStyle} from "assets/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>  
      <Head>
        <title>Thiago Fernandes - Portfólio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
