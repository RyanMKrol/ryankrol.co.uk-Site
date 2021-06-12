import React, { Component } from 'react';

import { DataCollection, ListensItemMini } from '../../components';

import { baseEndpoint } from '../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Music content
 */
class MusicSubPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/listens`;
    this.outputLimit = undefined;
  }

  /**
   * Render method
   *
   * @returns {string} JSX Content
   */
  render() {
    return (
      <div>
        <h2>Tune in to Ryan.FM</h2>
        <p>
          I spend a lot of time cultivating my interest in music, finding new artists, and expanding
          my tastes. You can find my account on
          <a href="https://www.last.fm/user/somethingmeaty">
            <span className="highlighted"> LastFM </span>
          </a>
          where I'm always tracking what I'm listening to. The albums below show the albums that
          I've listened to the most over the last year (don't judge!).
        </p>
        <p>
          Note: Sadly I'm no longer able to track this data as I've moved to Apple Music, which
          doesn't appear to support tracking data via LastFM. I still quite like the data I've
          amassed over the past couple of years though, so I'll keep this section for now.
        </p>
        <DataCollection
          outputSize={this.outputLimit}
          endpoint={this.endpoint}
          itemTag={ListensItemMini}
        />
      </div>
    );
  }
}

export default MusicSubPage;
