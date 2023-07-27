import Head from 'next/head';

import Layout from '@/components/Layout';
import VinylDisplayCard from '@/components/VinylDisplayCard';

import styles from './index.module.css';

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>Where movies have been rated...</title>
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
  const res = await fetch(
    `http://localhost:${process.env.PORT}/api/vinyl`
  ).catch((err) => {
    // decide what to do here when the API call fails
  });

  const data = await res.json();

  // sort data in ascending order using artist title. artists starting with "the ", do
  // not start with "T"
  data.sort(sortArtists);

  // Pass data to the page via props
  return { props: { data } };
}

/**
 * Sorter function to sort vinyl items by artist
 * @param {Object} a the first vinyl object
 * @param {Object} b the second vinyl object
 * @returns {boolean} Whether a is before b
 */
function sortArtists(a, b) {
  const formattedArtistA = formatStringForSort(a.artist);
  const formattedArtistB = formatStringForSort(b.artist);
  return formattedArtistA < formattedArtistB
    ? -1
    : formattedArtistA === formattedArtistB
    ? sortTitles(a, b)
    : 1;
}

/**
 * Sorter function to sort vinyl items by title
 * @param {Object} a the first vinyl object
 * @param {Object} b the second vinyl object
 * @returns {boolean} Whether a is before b
 */
function sortTitles(a, b) {
  const formattedTitleA = formatStringForSort(a.title);
  const formattedTitleB = formatStringForSort(b.title);
  return formattedTitleA < formattedTitleB
    ? -1
    : formattedTitleA === formattedTitleB
    ? 0
    : 1;
}

/**
 * Formats a value to remove "The " from the beginning, if it is present
 * @param {string} value The string to format
 * @returns {string} the formatted string
 */
function formatStringForSort(value) {
  const source = value.toLowerCase();
  return source.startsWith('the ') ? source.substring(4) : source;
}
