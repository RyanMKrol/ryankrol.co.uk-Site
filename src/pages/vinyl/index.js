import Head from 'next/head';

import Layout from '@/components/Layout';
import VinylDisplayCard from '@/components/VinylDisplayCard';

import { formatStringForTitleSort } from '@/lib/utilities/string';

import styles from './index.module.css';

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>My Vinyl!</title>
      </Head>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <VinylDisplayCard
            key={`${item.title}-${item.artist}`}
            artist={item.artist}
            date={item.date}
            thumbnail={item.thumbnail}
            title={item.title}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://ryankrol.co.uk/api/vinyl`).catch((err) => {
    // decide what to do here when the API call fails
  });

  const data = await res.json();

  // sort data in ascending order using artist title. artists starting with "the ", do
  // not start with "T"
  data.sort(sortByArtist);

  // Pass data to the page via props
  return { props: { data } };
}

/**
 * Sorter function to sort vinyl items by artist
 * @param {Object} a the first vinyl object
 * @param {Object} b the second vinyl object
 * @returns {boolean} Whether a is before b
 */
function sortByArtist(a, b) {
  const formattedArtistA = formatStringForTitleSort(a.artist);
  const formattedArtistB = formatStringForTitleSort(b.artist);
  return formattedArtistA < formattedArtistB
    ? -1
    : formattedArtistA === formattedArtistB
    ? sortByTitle(a, b)
    : 1;
}

/**
 * Sorter function to sort vinyl items by title
 * @param {Object} a the first vinyl object
 * @param {Object} b the second vinyl object
 * @returns {boolean} Whether a is before b
 */
function sortByTitle(a, b) {
  const formattedTitleA = formatStringForTitleSort(a.title);
  const formattedTitleB = formatStringForTitleSort(b.title);
  return formattedTitleA < formattedTitleB
    ? -1
    : formattedTitleA === formattedTitleB
    ? 0
    : 1;
}
