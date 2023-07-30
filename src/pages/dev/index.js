import Head from 'next/head';

import Layout from '@/components/Layout';
import ClearCacheForm from '@/components/DevTools/ClearCacheForm';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Dev Tools!</title>
      </Head>
      <div>
        <ClearCacheForm onFormSubmit={onFormSubmit} />
      </div>
    </Layout>
  );
}

async function onFormSubmit(body) {
  const response = await fetch(`http://ryankrol.co.uk/api/dev/cache`, {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  return {
    status: response.status,
    message: data.message,
  };
}
