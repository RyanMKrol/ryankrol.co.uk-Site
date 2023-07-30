import Head from 'next/head';

import Layout from '@/components/Layout';
import MovieOrTvRatingInputForm from '@/components/MovieOrTvRatingInputForm';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Where TV will be rated...</title>
      </Head>
      <div>
        <MovieOrTvRatingInputForm onFormSubmit={onFormSubmit} />
      </div>
    </Layout>
  );
}

async function onFormSubmit(body) {
  const response = await fetch(`http://ryankrol.co.uk/api/ratings/tv`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  return {
    status: response.status,
    message: data.message,
  };
}
