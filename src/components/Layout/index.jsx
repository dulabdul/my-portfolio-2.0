import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children, dataHeader, dataFooter }) {
  return (
    <>
      <Header data={dataHeader} />
      <main>{children}</main>
      <Footer data={dataFooter} />
    </>
  );
}
