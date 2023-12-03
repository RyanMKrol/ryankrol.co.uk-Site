import Head from 'next/head';

import Layout from '@/components/Layout';

import styles from './index.module.css';

import { fetchUpcomingConcerts } from './../../lib/remote/ryankrol';

import ConcertItemDisplayCard from './../../components/ConcertItemDisplayCard';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

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
  const concertData = await fetchUpcomingConcerts();

  // Pass data to the page via props
  return { props: { concertData } };
}
