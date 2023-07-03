import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { Analytics } from '@vercel/analytics/react';
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
  };
  console.log(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  return (
    <ThemeProvider attribute='class'>
      <GoogleAnalytics strategy='lazyOnload' />
      <Analytics />
      <DefaultSeo {...configSEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
