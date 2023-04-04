import Footer from '../Footer';
import Header from '../Header';

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
      <main>{children}</main>
      <Footer data={dataFooter} />
    </>
  );
}
