import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalyticsTracking from '@/components/GoogleAnalytics';

export default function App({ Component, pageProps }) {
  let title = 'Home | Portfolio';
  let description = 'Website portfolio created by Abdulrahman.';
  let url = 'https://ar-portofolio.my.id/';
  let imageUrl = '/thumbnail.jpg';
  const configSEO = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      type: 'website',
      locale: 'en_IE',
      url: url,
      siteName: 'SiteName',
      images: [
        {
          url: imageUrl,
          width: 300,
          height: 300,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    additionalMetaTags: [
      {
        name: 'google-site-verification',
        content: 'qz_JinId_g8c9pr5ZkpMi6NAOp2jfipQVDxrzw-eALk',
      },
    ],
  };

  return (
    <ThemeProvider attribute='class'>
      <GoogleAnalyticsTracking
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
      />
      <DefaultSeo {...configSEO} />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
