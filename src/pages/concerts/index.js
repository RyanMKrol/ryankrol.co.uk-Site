import Head from 'next/head';
import groupBy from 'lodash.groupby';

import Layout from '@/components/Layout';

import scanTable from './../../lib/remote/aws';

import styles from './index.module.css';

import { concertDataSort } from './../../lib/utilities/sort';

import ConcertItemDisplayCard from './../../components/ConcertItemDisplayCard';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

const CONCERT_DATA_DYNAMO_TABLE = 'ConcertDataItems';

export default function Page({ concertData }) {
  return (
    <Layout>
      <Head>
        <title>Concerts I Might Go To</title>
      </Head>
      <div className={styles.pageContainer}>
        {Object.keys(concertData).map((concertDate) => (
          <Accordion
            className={styles.accordion}
            key={concertData[concertDate].id}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <h1>{concertDate}</h1>
            </AccordionSummary>

            <div className={styles.cardContainer}>
              {concertData[concertDate].map((concertInfo) => (
                <ConcertItemDisplayCard
                  key={concertInfo.id}
                  artist={concertInfo.artist}
                  date={concertInfo.date}
                  profileUrl={concertInfo.profileUrl}
                  venue={concertInfo.venue}
                  eventUrl={concertInfo.eventUrl}
                />
              ))}
            </div>
          </Accordion>
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
