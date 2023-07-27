import Head from 'next/head';

import BookRatingDisplayCard from '@/components/BookRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';

import { formatStringForTitleSort } from '@/lib/utilities/string';

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>Where albums have been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <BookRatingDisplayCard
            key={`${item.title}-${item.author}`}
            title={item.title}
            author={item.author}
            rating={item.rating}
            date={item.date}
            thumbnail={item.thumbnail}
            overview={item.overview}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:${process.env.PORT}/api/ratings/book`
  ).catch((err) => {
    // decide what to do here when the API call fails
  });

  const data = await res.json();

  data.sort(sortByRating);

  // Pass data to the page via props
  return { props: { data } };
}

/**
 * Sorter function to sort vinyl items by artist
 * @param {Object} a the first vinyl object
 * @param {Object} b the second vinyl object
 * @returns {boolean} Whether a is before b
 */
function sortByRating(a, b) {
  return a.rating < b.rating
    ? -1
    : a.rating === b.rating
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
