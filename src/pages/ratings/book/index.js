import Head from 'next/head';

import BookRatingDisplayCard from '@/components/BookRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';

import { fetchBookRatings } from '@/lib/remote/ryankrol';

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
