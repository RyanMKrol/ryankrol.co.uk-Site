import Head from 'next/head';

import MovieOrTvRatingDisplayCard from '@/components/MovieOrTvRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';

import { fetchTvRatings } from '@/lib/remote/ryankrol';

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
