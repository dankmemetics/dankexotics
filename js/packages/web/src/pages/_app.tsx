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
      </Head>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

export default wrapper.withRedux(App);