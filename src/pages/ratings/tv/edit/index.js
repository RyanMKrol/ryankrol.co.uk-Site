import Head from 'next/head';

import Layout from '@/components/Layout';
import MovieOrTvRatingDisplayCard from '@/components/MovieOrTvRatingDisplayCard';

import { fetchTvRatings } from '@/lib/remote/ryankrol';

import styles from './../../index.module.css';

export default function Page({ tvRatings }) {
  return (
    <Layout>
      <Head>
        <title>Where TV has been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {tvRatings.map((item) => (
          <MovieOrTvRatingDisplayCard
            key={item.title + ' - ' + item.gist}
            title={item.title}
            characterScore={item.characterScore}
            craftsmanshipScore={item.craftsmanshipScore}
            date={item.date}
            gist={item.gist}
            overallScore={item.overallScore}
            soundScore={item.soundScore}
            storyScore={item.storyScore}
            thumbnail={item.thumbnail}
            editCallback={onFormSubmit}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const tvRatings = await fetchTvRatings();
  return { props: { tvRatings } };
}

async function onFormSubmit(body) {
  const response = await fetch(`http://ryankrol.co.uk/api/ratings/tv`, {
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
