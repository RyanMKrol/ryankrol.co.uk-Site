import React, { Component } from 'react';

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

    this.date = props.date;
    this.sound = props.sound;
    this.blind = props.blind;
    this.craftsmanship = props.craftsmanship;
    this.gist = props.gist;
    this.characters = props.characters;
    this.story = props.story;
    this.title = props.title;

    if (
      !this.date
      || !this.sound
      || !this.blind
      || !this.craftsmanship
      || !this.gist
      || !this.characters
      || !this.story
      || !this.title
    ) {
      throw new Error('Could not create MovieRatingsItem');
    }
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX MovieRatingsItem component
   */
  render() {
    return (
      <div>
        <span className="highlighted">Date:</span>
        <span>{this.date}</span>
        <br />
        <span className="highlighted">Sound:</span>
        <span>{this.sound}</span>
        <br />
        <span className="highlighted">Blind:</span>
        <span>{this.blind}</span>
        <br />
        <span className="highlighted">Craftsmanship:</span>
        <span>{this.craftsmanship}</span>
        <br />
        <span className="highlighted">Gist:</span>
        <span>{this.gist}</span>
        <br />
        <span className="highlighted">Characters:</span>
        <span>{this.characters}</span>
        <br />
        <span className="highlighted">Story:</span>
        <span>{this.story}</span>
        <br />
        <span className="highlighted">Title:</span>
        <span>{this.title}</span>
        <br />
      </div>
    );
  }
}

export default MovieRatingsItem;
