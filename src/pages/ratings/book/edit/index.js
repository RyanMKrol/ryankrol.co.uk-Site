import Head from 'next/head';

import Layout from '@/components/Layout';
import BookRatingDisplayCard from '@/components/BookRatingDisplayCard';

import { fetchBookRatings } from '@/lib/remote/ryankrol';

import styles from './../../index.module.css';

export default function Page({ bookRatings }) {
  return (
    <Layout>
      <Head>
        <title>Where books have been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {bookRatings.map((item) => (
          <BookRatingDisplayCard
            key={`${item.title}-${item.author}`}
            title={item.title}
            author={item.author}
            rating={item.rating}
            date={item.date}
            thumbnail={item.thumbnail}
            overview={item.overview}
            editCallback={onFormSubmit}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const bookRatings = await fetchBookRatings();
  return { props: { bookRatings } };
}

async function onFormSubmit(body) {
  const response = await fetch(`http://ryankrol.co.uk/api/ratings/book`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  return {
    status: response.status,
    message: data.message,
  };
}
