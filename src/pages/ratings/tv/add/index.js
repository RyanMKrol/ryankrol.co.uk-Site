import Head from 'next/head';

import Layout from '@/components/Layout';

export default function Page({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Where TV is rated...</title>
      </Head>
      <h1>Rate a TV</h1>
    </Layout>
  );
}
