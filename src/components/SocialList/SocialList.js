import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

import styles from './SocialList.module.css';

/**
 * A component representing a SocialList item
 */
class SocialList extends Component {
  /**
   * @class
   */
  constructor() {
    super();
    this.content = (
      <div className={styles.container}>
        <a href="https://www.instagram.com/gingerdude/">
          <FontAwesomeIcon className={`${styles.item} light`} size="2x" icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/krol.ryan/">
          <FontAwesomeIcon className={`${styles.item} light`} size="2x" icon={faFacebook} />
        </a>
        <a href="https://github.com/RyanMKrol">
          <FontAwesomeIcon className={`${styles.item} light`} size="2x" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/ryan-krol-265308a2/">
          <FontAwesomeIcon className={`${styles.item} light`} size="2x" icon={faLinkedin} />
        </a>
        <a href="https://open.spotify.com/playlist/1n2Wuu0Ca4INGcFRcbavZS?si=oLvTTTKuQJCzlkcEXmdREA">
          <FontAwesomeIcon className={`${styles.item} light`} size="2x" icon={faSpotify} />
        </a>
      </div>
    );
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX SocialList component
   */
  render() {
    return (
      <div>
        <div className={`${styles.topLine} ${styles.verticalLine}`} />
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>{this.content}</div>
        </div>
        <div className={`${styles.bottomLine} ${styles.verticalLine}`} />
      </div>
    );
  }
}

export default SocialList;
