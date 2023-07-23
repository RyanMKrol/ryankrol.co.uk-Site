import Head from 'next/head';

import MovieRatingViewerCard from '@/components/MovieRatingViewerCard';
import Layout from '@/components/Layout';

export default function Page({ data }) {
  console.log(data.data);
  return (
    <Layout>
      <Head>
        <title>Where movies have been rated...</title>
      </Head>
      {data.data.map((item) => (
        <MovieRatingViewerCard
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
      <h1>View some ratings</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/movieRatings`).catch(
    (err) => {
      // decide what to do here when the API call fails
    }
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
