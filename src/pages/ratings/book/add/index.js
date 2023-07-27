import Head from 'next/head';

import Layout from '@/components/Layout';
import BookRatingsInputForm from '@/components/BookRatingsInputForm';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Where books will be rated...</title>
      </Head>
      <div>
        <BookRatingsInputForm onFormSubmit={onFormSubmit} />
      </div>
    </Layout>
  );
}

async function onFormSubmit(body) {
  const response = await fetch(`http://localhost:3000/api/ratings/book`, {
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
