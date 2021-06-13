import React, { Component } from 'react';

import { DataCollection, ListensItemMini } from '../../components';

import { baseEndpoint } from '../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Music content
 */
class MusicPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/listens`;
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
          I spend a decent amount of time cultivating my interest in music, finding new artists, and
          expanding my tastes. You can find my account on
          <a href="https://www.last.fm/user/somethingmeaty">
            <span className="highlighted"> LastFM </span>
          </a>
          where what I'm listening to is automatically being tracked. The albums below show the
          albums that I've listened to the most over the last year (no judgement please!).
        </p>
        <p>
          Note: Sadly I'm no longer able to track this data as I've moved to Apple Music, which
          doesn't appear to support "scrobbling" via LastFM. I still quite like the data I've
          amassed over the past couple of years though, so here's what I was listening to for the
          past year up to some time in 2020 ;)
        </p>
        <DataCollection endpoint={this.endpoint} itemTag={ListensItemMini} />
      </div>
    );
  }
}

export default MusicPage;
