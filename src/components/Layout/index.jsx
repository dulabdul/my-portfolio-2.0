import Footer from '../Footer';
import Header from '../Header';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export default function Layout({
  children,
  dataHeader,
  dataFooter,
  reachMeRef,
  projectRef,
  certRef,
  discoverRef,
}) {
  return (
    <>
      <Header
        data={dataHeader}
        reachMeRef={reachMeRef}
        projectRef={projectRef}
        certRef={certRef}
        discoverRef={discoverRef}
      />
      <main className={roboto.className}>{children}</main>
      <Footer data={dataFooter} />
    </>
  );
}
