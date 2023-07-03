import React from 'react';
import Script from 'next/script';
export default function GoogleAnalyticsTracking({ GA_TRACKING_ID }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id='${GA_TRACKING_ID}'`}
        strategy='afterInteractive'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
}
