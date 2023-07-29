import Head from 'next/head';

import MovieOrTvRatingDisplayCard from '@/components/MovieOrTvRatingDisplayCard';
import AlbumRatingDisplayCard from '@/components/AlbumRatingDisplayCard';
import BookRatingDisplayCard from '@/components/BookRatingDisplayCard';
import VinylDisplayCard from '@/components/VinylDisplayCard';

import Layout from '@/components/Layout';

import styles from './index.module.css';
import Link from 'next/link';

export default function Page({
  movieRatings,
  tvRatings,
  albumRatings,
  bookRatings,
  vinylCollection,
}) {
  return (
    <Layout>
      <Head>
        <title>Home!</title>
      </Head>
      <div>
        <br />
        <br />
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            A bunch of movie ratings! Click{' '}
            <Link href="/ratings/movie">here</Link> to see more
          </span>
        </div>
        <div className={styles.dataContainer}>
          <div
            className={
              styles.innerDataContainer + ' ' + styles.movieOrTvCardContainer
            }
          >
            {movieRatings.map((item) => (
              <MovieOrTvRatingDisplayCard
                key={item.title}
                overallScore={item.blind}
                storyScore={item.story}
                characterScore={item.characters}
                musicScore={item.sound}
                craftsmanshipScore={item.craftsmanship}
                thumbnail={item.thumbnail}
                title={item.title}
                gist={item.gist}
                date={item.date}
              />
            ))}
          </div>
        </div>
        <br />
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            A bunch of TV series ratings! Click{' '}
            <Link href="/ratings/tv">here</Link> to see more
          </span>
        </div>
        <div className={styles.dataContainer}>
          <div
            className={
              styles.innerDataContainer + ' ' + styles.movieOrTvCardContainer
            }
          >
            {tvRatings.map((item) => (
              <MovieOrTvRatingDisplayCard
                key={item.title}
                overallScore={item.blind}
                storyScore={item.story}
                characterScore={item.characters}
                musicScore={item.sound}
                craftsmanshipScore={item.craftsmanship}
                thumbnail={item.thumbnail}
                title={item.title}
                gist={item.gist}
                date={item.date}
              />
            ))}
          </div>
        </div>
        <br />
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            A bunch of album ratings! Click{' '}
            <Link href="/ratings/album">here</Link> to see more
          </span>
        </div>
        <div className={styles.dataContainer}>
          <div
            className={
              styles.innerDataContainer + ' ' + styles.albumCardContainer
            }
          >
            {albumRatings.map((item) => (
              <AlbumRatingDisplayCard
                key={`${item.title}-${item.artist}`}
                highlights={item.highlights}
                artist={item.artist}
                date={item.date}
                rating={item.rating}
                thumbnail={item.thumbnail}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <br />
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            A bunch of book ratings! Click{' '}
            <Link href="/ratings/book">here</Link> to see more
          </span>
        </div>
        <div className={styles.dataContainer}>
          <div
            className={
              styles.innerDataContainer + ' ' + styles.bookCardContainer
            }
          >
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
        </div>
        <br />
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            My vinyl collection! Click <Link href="/vinyl">here</Link> to see
            more
          </span>
        </div>
        <div className={styles.dataContainer}>
          <div
            className={
              styles.innerDataContainer + ' ' + styles.vinylCardContainer
            }
          >
            {vinylCollection.map((item) => (
              <VinylDisplayCard
                key={`${item.title}-${item.artist}`}
                artist={item.artist}
                date={item.date}
                thumbnail={item.thumbnail}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const movieRatings = await fetchAndShuffle(
    `http://ryankrol.co.uk/api/ratings/movie`
  );

  const tvRatings = await fetchAndShuffle(
    `http://ryankrol.co.uk/api/ratings/tv`
  );

  const albumRatings = await fetchAndShuffle(
    `http://ryankrol.co.uk/api/ratings/album`
  );

  const bookRatings = await fetchAndShuffle(
    `http://ryankrol.co.uk/api/ratings/book`
  );

  const vinylCollection = await fetchAndShuffle(
    `http://ryankrol.co.uk/api/vinyl`
  );

  return {
    props: {
      movieRatings,
      tvRatings,
      albumRatings,
      bookRatings,
      vinylCollection,
    },
  };
}

async function fetchAndShuffle(url) {
  const res = await fetch(url).catch((err) => {
    // decide what to do here when the API call fails
  });

  const data = await res.json();

  data.sort(() => 0.5 - Math.random());

  return data.slice(0, 20);
}
