import Head from 'next/head';
import groupBy from 'lodash.groupby';

import Layout from '@/components/Layout';

import scanTable from './../../lib/remote/aws';

import styles from './index.module.css';

import { concertDataSort } from './../../lib/utilities/sort';

const CONCERT_DATA_DYNAMO_TABLE = 'ConcertDataItems';

export default function Page({ concertData }) {
  return (
    <Layout>
      <Head>
        <title>Concerts I Might Go To</title>
      </Head>
      <div className={styles.cardContainer}>
        {Object.keys(concertData).map((concertDate) => (
          <div key={concertDate}>
            <h1>{concertDate}</h1>

            {concertData[concertDate].map((concertInfo) => (
              <p key={concertInfo.id}>{JSON.stringify(concertInfo, null, 2)}</p>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const rawConcertData = await scanTable(CONCERT_DATA_DYNAMO_TABLE);

  const filteredRawData = rawConcertData.filter(
    (item) => new Date(item.date) > new Date()
  );

  const sortedConcertData = filteredRawData.sort(concertDataSort);

  const groupedConcertData = groupBy(sortedConcertData, 'date');

  // Pass data to the page via props
  return { props: { concertData: groupedConcertData } };
}
