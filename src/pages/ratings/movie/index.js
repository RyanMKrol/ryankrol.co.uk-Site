import Head from 'next/head';

import MovieOrTvRatingDisplayCard from '@/components/MovieOrTvRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';
import sortByRating from '@/lib/utilities/sort';

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
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/movie`).catch(
    (err) => {
      // decide what to do here when the API call fails
    }
  );

  const movieRatings = await res.json();

  movieRatings.sort(sortByRating);

  // Pass data to the page via props
  return { props: { movieRatings } };
}
