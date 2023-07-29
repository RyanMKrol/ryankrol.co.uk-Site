import Head from 'next/head';

import Layout from '@/components/Layout';
import ListenDisplayCard from '@/components/ListenDisplayCard';

import styles from './index.module.css';

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>What I&apos;ve been listening to!</title>
      </Head>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <ListenDisplayCard
            key={`${item.name}-${item.artist}`}
            artist={item.artist}
            name={item.name}
            thumbnail={item.thumbnail}
            plays={item.plays}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://ryankrol.co.uk/api/listens`).catch((err) => {
    // decide what to do here when the API call fails
  });

  const data = await res.json();

  const displayData = data.filter((item) => item.plays > 10);

  // Pass data to the page via props
  return { props: { data: displayData } };
}
