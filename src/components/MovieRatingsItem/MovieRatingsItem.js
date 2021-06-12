import React, { Component } from 'react';

import RatingsGraph from '../RatingsGraph';

import styles from './MovieRatingsItem.module.css';

/**
 * A component representing a movie ratings item
 */
class MovieRatingsItem extends Component {
  /**
   * @class
   * @param {object} props arguments to class
   */
  constructor(props) {
    super();

    if (
      typeof props.date === 'undefined'
      || typeof props.sound === 'undefined'
      || typeof props.blind === 'undefined'
      || typeof props.craftsmanship === 'undefined'
      || typeof props.gist === 'undefined'
      || typeof props.characters === 'undefined'
      || typeof props.story === 'undefined'
      || typeof props.title === 'undefined'
      || typeof props.thumbnail === 'undefined'
    ) {
      throw new Error('Could not create MovieRatingsItem');
    }

    this.date = props.date;
    this.sound = props.sound;
    this.blind = props.blind;
    this.craftsmanship = props.craftsmanship;
    this.gist = props.gist;
    this.characters = props.characters;
    this.story = props.story;
    this.title = props.title;
    this.thumbnail = props.thumbnail;

    const ratingsGraphData = {
      [`Overall: ${this.blind}`]: this.blind,
      [`Sound: ${this.sound}`]: this.sound,
      [`Craftsmanship: ${this.craftsmanship}`]: this.craftsmanship,
      [`Characters: ${this.characters}`]: this.characters,
      [`Story: ${this.story}`]: this.story,
    };

    this.labels = Object.keys(ratingsGraphData);
    this.data = Object.values(ratingsGraphData);
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX MovieRatingsItem component
   */
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.thumbnailContainer}>
          <img className={styles.thumbnail} src={this.thumbnail} alt={this.title} />
        </div>
        <div className={styles.chart}>
          <RatingsGraph data={this.data} labels={this.labels} />
        </div>
      </div>
    );
  }
}

export default MovieRatingsItem;
