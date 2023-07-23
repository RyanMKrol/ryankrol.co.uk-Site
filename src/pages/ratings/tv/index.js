import Head from 'next/head';

import MovieOrTvRatingViewerCard from '@/components/MovieOrTvRatingViewerCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>Where movies have been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <MovieOrTvRatingViewerCard
            key={item.title}
            overallScore={item.blind}
            storyScore={item.story}
            characterScore={item.characters}
            musicScore={item.sound}
            craftsmanshipScore={item.craftsmanship}
            thumbnail={item.thumbnail}
            title={item.title}
            gist={item.gist}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/tvRatings`).catch(
    (err) => {
      // decide what to do here when the API call fails
    }
  );
  const { data } = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
