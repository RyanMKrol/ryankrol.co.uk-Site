import Head from 'next/head';

import Layout from '@/components/Layout';

export default function Page({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Where movies are rated...</title>
      </Head>
      <h1>Rate a movie</h1>
    </Layout>
  );
}
