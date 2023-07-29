import Head from 'next/head';

import AlbumRatingDisplayCard from '@/components/AlbumRatingDisplayCard';
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
          <AlbumRatingDisplayCard
            key={`${item.title}-${item.artist}`}
            highlights={item.highlights}
            artist={item.artist}
            date={item.date}
            rating={item.rating}
            thumbnail={item.thumbnail}
            title={item.title}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:${process.env.PORT}/api/ratings/album`
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
