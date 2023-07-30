import Head from 'next/head';

import MovieOrTvRatingDisplayCard from '@/components/MovieOrTvRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';
import sortByRating from '@/lib/utilities/sort';

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>Where TV have been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <MovieOrTvRatingDisplayCard
            key={item.title}
            overallScore={item.blind}
            storyScore={item.story}
            characterScore={item.characters}
            musicScore={item.sound}
            craftsmanshipScore={item.craftsmanship}
            thumbnail={item.thumbnail}
            title={item.title}
            gist={item.gist}
            date={item.date}
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

  const data = await res.json();

  data.sort(sortByRating);

  // Pass data to the page via props
  return { props: { data } };
}
