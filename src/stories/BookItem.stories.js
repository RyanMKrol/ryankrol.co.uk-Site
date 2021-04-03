import React from 'react';
import BookItem from '../components/BookItem';

export default {
  title: 'BookItem',
};

/**
 * default story
 *
 * @returns {string} JSX for the component I want to display
 */
export const normal = () => (
  <div style={{ display: 'flex' }}>
    <BookItem
      title={'12 Rules for Life'}
      authors={['Jordan B. Peterson']}
      images={{
        smallThumbnail:
          'http://books.google.com/books/content?id=u8w_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=u8w_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      }}
      isbn={'9780241351659'}
      bookId={'u8w_DwAAQBAJ'}
    />
  </div>
);
