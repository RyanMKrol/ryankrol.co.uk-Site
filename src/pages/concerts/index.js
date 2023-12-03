import Head from 'next/head';

import Layout from '@/components/Layout';

import scanTable from './../../lib/remote/aws';

import styles from './index.module.css';

const CONCERT_DATA_DYNAMO_TABLE = 'ConcertDataItems';

export default function Page({ concertData }) {
  console.log(concertData);
  return (
    <Layout>
      <Head>
        <title>My vinyl collection!</title>
      </Head>
      <div className={styles.cardContainer}>
        {concertData.map((item) => (
          <p key={item.id}>${JSON.stringify(item, null, 2)}</p>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const concertData = await scanTable(CONCERT_DATA_DYNAMO_TABLE);

  // Pass data to the page via props
  return { props: { concertData } };
}
