import Head from 'next/head';

import Layout from '@/components/Layout';
import AlbumRatingInputForm from '@/components/AlbumRatingInputForm';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Where albums will be rated...</title>
      </Head>
      <div>
        <AlbumRatingInputForm onFormSubmit={onFormSubmit} />
      </div>
    </Layout>
  );
}

async function onFormSubmit(body) {
  const response = await fetch(`http://ryankrol.co.uk/api/ratings/album`, {
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
