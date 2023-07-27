import { BookInformationNotFound } from '@/lib/errors';

/**
 * Fetch remote information for a given book
 * @param {string} title title of the book
 * @param {string} author author of the book
 * @returns {object} information about the book to be saved
 */
async function fetchRemoteInfoForBook(title, author) {
  const url = `https://www.googleapis.com/books/v1/volumes?key=${process.env.GOOGLE_BOOKS_API_KEY}&q=${title}+inauthor:${author}`;
  const data = await fetch(url);
  const response = await data.json();

  if (!response.items || response.items.length === 0) {
    throw new BookInformationNotFound();
  }

  const targetBookInfo = response.items[0];

  const { thumbnail } = targetBookInfo.volumeInfo.imageLinks;
  const { infoLink, publishedDate } = targetBookInfo.volumeInfo;

  if (!thumbnail || !infoLink || !publishedDate) {
    throw new BookInformationNotFound();
  }

  return {
    thumbnail,
    infoLink,
    publishedDate,
  };
}

export default fetchRemoteInfoForBook;
