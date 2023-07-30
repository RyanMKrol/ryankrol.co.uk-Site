import Head from 'next/head';

import MovieOrTvRatingDisplayCard from '@/components/MovieOrTvRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';

import { fetchMovieRatings } from '@/lib/remote/ryankrol';

export default function Page({ movieRatings }) {
  return (
    <Layout>
      <Head>
        <title>Where movies have been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {movieRatings.map((item) => (
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
  const movieRatings = await fetchMovieRatings();
  return { props: { movieRatings } };
}
