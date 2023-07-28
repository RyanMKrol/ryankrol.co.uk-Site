import '@/styles/globals.css';
import '@fontsource/ibm-plex-mono/700.css';

import SiteHeader from '@/components/SiteHeader';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SiteHeader />
      <Component {...pageProps} />
    </>
  );
}
