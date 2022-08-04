import '@styles/reset.css';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

import Header from '@components/Header';
import { ActivitiesProvider } from '@context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActivitiesProvider>
      <Header />
      <Component {...pageProps} />
    </ActivitiesProvider>
  );
}

export default MyApp;
