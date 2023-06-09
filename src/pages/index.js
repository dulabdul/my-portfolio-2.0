import Head from 'next/head';
import Layout from '@/components/Layout';
import {
  Hero,
  About,
  Project,
  Contacts,
  Certificate,
  ScrollToTop,
} from '@/components';

import useData from '@/hooks/useData';
import { useRef } from 'react';

export default function Home() {
  const { data, isError, isLoading } = useData();
  const discoverRef = useRef(null);
  const reachMeRef = useRef(null);
  const projectRef = useRef(null);
  const certRef = useRef(null);
  return (
    <>
      <Layout
        dataHeader={data?.hero}
        reachMeRef={reachMeRef}
        discoverRef={discoverRef}
        projectRef={projectRef}
        certRef={certRef}
        dataFooter={data?.contacts}>
        <Hero
          data={data?.hero}
          discoverRef={discoverRef}
          reachMeRef={reachMeRef}
        />
        <About discoverRef={discoverRef} />
        <Project
          projectRef={projectRef}
          data={data?.categories}
          isLoading={isLoading}
          isError={isError}
        />
        <Certificate
          certRef={certRef}
          data={data?.certificate}
        />
        <Contacts reachMeRef={reachMeRef} />
      </Layout>
      <ScrollToTop />
    </>
  );
}
