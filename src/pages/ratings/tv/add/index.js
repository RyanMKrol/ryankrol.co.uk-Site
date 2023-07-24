import Head from 'next/head';

import Layout from '@/components/Layout';
import MovieOrTvRatingsInputForm from '@/components/MovieOrTvRatingsInputForm';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Where TV will be rated...</title>
      </Head>
      <div>
        <MovieOrTvRatingsInputForm />
      </div>
    </Layout>
  );
}
