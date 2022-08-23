import ResetStyle from '@styles/reset';
import GlobalStyle from '@styles/globals';
import type { AppProps } from 'next/app';

import Header from '@components/Header';
import { HelperModal, HelperButton } from '@components/Helper';
import { AppProvider } from '@context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <HelperButton />
      <Component {...pageProps} />
      <HelperModal />
    </AppProvider>
  );
}

export default MyApp;
