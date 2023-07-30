import Head from 'next/head';

import AlbumRatingDisplayCard from '@/components/AlbumRatingDisplayCard';
import Layout from '@/components/Layout';

import fetchAlbumRatings from '@/lib/remote/ryankrol';

import styles from './../../index.module.css';

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
            editCallback={onFormSubmit}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const albumRatings = await fetchAlbumRatings();

  return { props: { albumRatings } };
}

async function onFormSubmit(body) {
  const response = await fetch(`http://ryankrol.co.uk/api/ratings/album`, {
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
