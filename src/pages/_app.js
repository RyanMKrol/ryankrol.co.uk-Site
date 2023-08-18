import Script from 'next/script';

import '@fontsource/ibm-plex-mono/700.css';
import '@fontsource/ibm-plex-mono/300.css';
import '@/styles/globals.css';

import SiteHeader from '@/components/SiteHeader';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-W68SVNFP1J`}
      />
      <Script
        id="googleAnalytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W68SVNFP1J', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <SiteHeader />
      <Component {...pageProps} />
    </>
  );
}
