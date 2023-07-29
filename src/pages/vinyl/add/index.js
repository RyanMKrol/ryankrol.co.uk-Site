import Head from 'next/head';

import Layout from '@/components/Layout';
import VinylCollectionInputForm from '@/components/VinylCollectionInputForm';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Where vinyl will be added...</title>
      </Head>
      <div>
        <VinylCollectionInputForm onFormSubmit={onFormSubmit} />
      </div>
    </Layout>
  );
}

async function onFormSubmit(body) {
  const response = await fetch(`http://ryankrol.co.uk/api/vinyl`, {
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
