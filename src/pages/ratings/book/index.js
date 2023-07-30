import Head from 'next/head';

import BookRatingDisplayCard from '@/components/BookRatingDisplayCard';
import Layout from '@/components/Layout';
import styles from './../index.module.css';

import { formatStringForTitleSort } from '@/lib/utilities/string';

export default function Page({ bookRatings }) {
  return (
    <Layout>
      <Head>
        <title>Where books have been rated...</title>
      </Head>
      <div className={styles.cardContainer}>
        {bookRatings.map((item) => (
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
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/book`).catch(
    (err) => {
      // decide what to do here when the API call fails
    }
  );

  const bookRatings = await res.json();

  bookRatings.sort(sortByTitle);

  // Pass data to the page via props
  return { props: { bookRatings } };
}

/**
 * Sorter function to sort vinyl items by artist
 * @param {Object} a the first vinyl object
 * @param {Object} b the second vinyl object
 * @returns {boolean} Whether a is before b
 */
function sortByRating(a, b) {
  return a.rating < b.rating
    ? 1
    : a.rating === b.rating
    ? sortByTitle(a, b)
    : -1;
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
