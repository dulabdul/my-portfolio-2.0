import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  let title = 'Home | Portfolio';
  let description = 'Website portfolio created by Abdulrahman.';
  let url = 'https://ar-portofolio.my.id/';
  let imageUrl1 = '/images/og-300x300.jpg';
  let imageUrl2 = '/images/og-img.jpg';
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
          url: imageUrl1,
          width: 256,
          height: 256,
          alt: title,
          type: 'image/jpeg',
        },
        {
          url: imageUrl2,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
  };
  return (
    <ThemeProvider attribute='class'>
      <DefaultSeo {...configSEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
