import Head from 'next/head';

import BookRatingDisplayCard from '@/components/BookRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>Where albums have been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {data.map((item) => (
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
  const res = await fetch(
    `http://localhost:${process.env.PORT}/api/ratings/book`
  ).catch((err) => {
    // decide what to do here when the API call fails
  });

  const data = await res.json();

  data.sort((a, b) =>
    a.rating < b.rating ? 1 : a.rating === b.rating ? 0 : -1
  );

  // Pass data to the page via props
  return { props: { data } };
}
