import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../dank/components/brand/reset.css';
import { wrapper } from '../dank/redux/redux.store';
import { AppContainer } from '../dank/components/brand/brand.app';

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dank Exotics</title>
        <link rel="icon" type="image/png" href="/images/logo.png" />

        <meta name="author" content="Dank Memetics" />
        <meta name="description" content="The Dankest Exotic Kush on Solana" />

        <meta property="og:title" content="Dank Exotics" />
        <meta property="og:image" content="https://dankexotics.cloud/images/splash.jpg" />
        <meta property="og:description" content="The Dankest Exotic Kush on Solana" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dank Exotics" />
        <meta name="twitter:description" content="The Dankest Exotic Kush on Solana" />
        <meta name="twitter:image" content="https://dankexotics.cloud/images/splash.jpg" />
      </Head>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

export default wrapper.withRedux(App);