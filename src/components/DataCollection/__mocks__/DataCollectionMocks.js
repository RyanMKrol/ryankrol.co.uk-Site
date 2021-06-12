import DataCollection from '../DataCollection';

import { ListensItemMini, ListensItemFull } from '../..';

const FULL_OUTPUT_MOCK = (
  <DataCollection endpoint={'http://ryankrol.co.uk/api/listens'} itemTag={ListensItemMini} />
);

const REDUCED_OUTPUT_MOCK = (
  <DataCollection
    outputSize={1}
    endpoint={'http://ryankrol.co.uk/api/listens'}
    itemTag={ListensItemFull}
  />
);

const REDUCED_OUTPUT_MOCK_WITH_SORTER = (
  <DataCollection
    endpoint={'http://ryankrol.co.uk/api/listens'}
    itemTag={ListensItemFull}
    sorter={(a, b) => {
      if (a.playcount < b.playcount) {
        return 1;
      }
      if (a.playcount > b.playcount) {
        return -1;
      }

      return 0;
    }}
  />
);

const EXAMPLE_LISTENS_MOCK_ONE = {
  albumLink: 'test-albumLink-one',
  albumName: 'test-albumName-one',
  thumbnail: 'test-thumbnail-one',
  artist: 'test-artist-one',
  playcount: 1,
};

const EXAMPLE_LISTENS_MOCK_TWO = {
  albumLink: 'test-albumLink-two',
  albumName: 'test-albumName-two',
  thumbnail: 'test-thumbnail-two',
  artist: 'test-artist-two',
  playcount: 2,
};

export {
  FULL_OUTPUT_MOCK,
  REDUCED_OUTPUT_MOCK,
  REDUCED_OUTPUT_MOCK_WITH_SORTER,
  EXAMPLE_LISTENS_MOCK_ONE,
  EXAMPLE_LISTENS_MOCK_TWO,
};
