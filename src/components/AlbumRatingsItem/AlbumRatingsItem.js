import React, { Component } from 'react';

import styles from './AlbumRatingsItem.module.css';

/**
 * A component representing a movie ratings item
 */
class AlbumRatingsItem extends Component {
  /**
   * @class
   * @param {object} props arguments to class
   */
  constructor(props) {
    super();

    if (
      typeof props.artist === 'undefined'
      || typeof props.date === 'undefined'
      || typeof props.highlights === 'undefined'
      || typeof props.mood === 'undefined'
      || typeof props.rating === 'undefined'
      || typeof props.title === 'undefined'
      || typeof props.thumbnail === 'undefined'
    ) {
      throw new Error('Could not create AlbumRatingsItem');
    }

    this.artist = props.artist;
    this.date = props.date;
    this.highlights = props.highlights;
    this.mood = props.mood;
    this.rating = props.rating;
    this.title = props.title;
    this.thumbnail = props.thumbnail;
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX AlbumRatingsItem component
   */
  render() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitleContainer}>
              <p className={`dark ${styles.titleContent}`}>
                {this.artist} - {this.title}
              </p>
              <div className={styles.titleUnderline} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.thumbnailContainer}>
              <img className={styles.thumbnail} src={this.thumbnail} alt={this.title} />
            </div>
            <div>
              <span className="dark">Score: </span>
              <span className="dark">{this.rating}</span>
              <br />
              <span className="dark">Mood: </span>
              <span className="dark">{this.mood}</span>
              <br />
              <br />
              <span className="dark">Highlights: </span>
              <span className="dark">{this.highlights}</span>
              <br />
            </div>
          </div>
          <p className={`dark ${styles.date}`}>{this.date}</p>
        </div>
      </div>
    );
  }
}

export default AlbumRatingsItem;
