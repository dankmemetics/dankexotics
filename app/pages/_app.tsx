import '../components/brand/reset.css';
import App, { AppContext, AppInitialProps } from 'next/app';
import dynamic from 'next/dynamic';
import { wrapper } from '../redux/redux.store';
import { AppContainer } from '../components/brand/brand.app';

const WalletConnectionProvider = dynamic(() => import('../components/common/common.wallet'), {
  ssr: false,
});

export class AppComponent extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
      appProp: ctx.pathname,
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <WalletConnectionProvider>
        <AppContainer>
          <Component {...pageProps}/>
        </AppContainer>
      </WalletConnectionProvider>
    )
  }
}

export default wrapper.withRedux(AppComponent);