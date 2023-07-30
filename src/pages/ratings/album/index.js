import Head from 'next/head';

import AlbumRatingDisplayCard from '@/components/AlbumRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';

export default function Page({ albumRatings }) {
  return (
    <Layout>
      <Head>
        <title>Where albums have been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {albumRatings.map((item) => (
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
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/album`).catch(
    (err) => {
      // decide what to do here when the API call fails
    }
  );

  const albumRatings = await res.json();

  albumRatings.sort((a, b) =>
    a.rating < b.rating ? 1 : a.rating === b.rating ? 0 : -1
  );

  // Pass data to the page via props
  return { props: { albumRatings } };
}
