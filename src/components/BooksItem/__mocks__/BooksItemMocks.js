import BooksItem from '../BooksItem';

const DEFAULT_MOCK = (
  <BooksItem
    authors={['Matt Haig']}
    images={{
      thumbnail:
        'http://books.google.com/books/content?id=4mZ1XoSpR9UC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    }}
    isbn={'9780857868770'}
    series={'The Humans'}
    numberInSeries={1}
    title="The Humans"
  />
);

export default DEFAULT_MOCK;
