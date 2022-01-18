import React, { Component } from 'react';

import styles from './VinylCollectionItem.module.css';

/**
 * A component representing a vinyl item
 */
class VinylCollectionItem extends Component {
  /**
   * @class
   * @param {object} props arguments to class
   */
  constructor(props) {
    super();

    if (
      typeof props.artist === 'undefined'
      || typeof props.date === 'undefined'
      || typeof props.title === 'undefined'
      || typeof props.thumbnail === 'undefined'
    ) {
      throw new Error('Could not create VinylCollectionItem');
    }

    this.artist = props.artist;
    this.date = props.date;
    this.title = props.title;
    this.thumbnail = props.thumbnail;
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX VinylCollectionItem component
   */
  render() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <div className={styles.innerTitleContainer}>
              <p className={`dark ${styles.titleContent}`}>
                <span className='highlighted'>{this.artist}</span> - {this.title}
              </p>
              <div className={styles.titleUnderline} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.thumbnailContainer}>
              <img className={styles.thumbnail} src={this.thumbnail} alt={this.title} />
            </div>
          </div>
          <p className={`dark ${styles.date}`}>{this.date}</p>
        </div>
      </div>
    );
  }
}

export default VinylCollectionItem;
