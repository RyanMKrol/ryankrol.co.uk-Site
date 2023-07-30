import Head from 'next/head';

import MovieOrTvRatingDisplayCard from '@/components/MovieOrTvRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';
import sortByRating from '@/lib/utilities/sort';

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
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/tv`).catch(
    (err) => {
      // decide what to do here when the API call fails
    }
  );

  const tvRatings = await res.json();

  tvRatings.sort(sortByRating);

  // Pass data to the page via props
  return { props: { tvRatings } };
}
