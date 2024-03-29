import Head from 'next/head';

import MovieOrTvRatingDisplayCard from '@/components/MovieOrTvRatingDisplayCard';
import AlbumRatingDisplayCard from '@/components/AlbumRatingDisplayCard';
import BookRatingDisplayCard from '@/components/BookRatingDisplayCard';
import VinylDisplayCard from '@/components/VinylDisplayCard';
import ListenDisplayCard from '@/components/ListenDisplayCard';

import Layout from '@/components/Layout';

import styles from './index.module.css';
import Link from 'next/link';

export default function Page({
  movieRatings,
  tvRatings,
  albumRatings,
  bookRatings,
  vinylCollection,
  listensData,
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
            What I&apos;ve been listening to this month! Click{' '}
            <Link href="/listens">here</Link> to see more
          </span>
        </div>
        <div className={styles.dataContainer}>
          <div
            className={
              styles.innerDataContainer + ' ' + styles.listensCardContainer
            }
          >
            {listensData.map((item) => (
              <ListenDisplayCard
                key={`${item.name}-${item.artist}`}
                artist={item.artist}
                name={item.name}
                thumbnail={item.thumbnail}
                plays={item.plays}
              />
            ))}
          </div>
        </div>
        <br />
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            A bunch of movies I&apos;ve seen and judged! Click{' '}
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
                key={item.title + ' - ' + item.gist}
                title={item.title}
                characterScore={item.characterScore}
                craftsmanshipScore={item.craftsmanshipScore}
                date={item.date}
                gist={item.gist}
                overallScore={item.overallScore}
                soundScore={item.soundScore}
                storyScore={item.storyScore}
                thumbnail={item.thumbnail}
              />
            ))}
          </div>
        </div>
        <br />
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            A bunch of TV I&apos;ve watched and rated! Click{' '}
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
                key={item.title + ' - ' + item.gist}
                title={item.title}
                characterScore={item.characterScore}
                craftsmanshipScore={item.craftsmanshipScore}
                date={item.date}
                gist={item.gist}
                overallScore={item.overallScore}
                soundScore={item.soundScore}
                storyScore={item.storyScore}
                thumbnail={item.thumbnail}
              />
            ))}
          </div>
        </div>
        <br />
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>
            A bunch of albums I&apos;ve heard and critiqued! Click{' '}
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
            A small handful of books I&apos;ve actually got around to reading!
            Click <Link href="/ratings/book">here</Link> to see more
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

  const listensData = await fetchAndShuffle(
    `http://ryankrol.co.uk/api/listens`
  );

  return {
    props: {
      movieRatings,
      tvRatings,
      albumRatings,
      bookRatings,
      vinylCollection,
      listensData,
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
