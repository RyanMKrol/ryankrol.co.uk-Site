import React, { Component } from 'react'

import './MovieItem.css';

class MovieItem extends Component {
  constructor(props) {
    super()

    this.movieName = props.movieName
    this.movieThumbnail = props.movieThumbnail
    this.movieRuntime = props.movieRuntime
    this.movieReleaseDate = props.movieReleaseDate

    if (!(this.movieName && this.movieThumbnail && this.movieRuntime && this.movieReleaseDate)) {
      throw new Error('Did not pass all required args for rendering movieItem')
    }
  }

  render() {
    return (
      <div className="MovieItem">
        <div className="movie-item-thumbnail">
          <img
            className="movie-item-image"
            src={this.movieThumbnail}
            alt={this.movieName}
          />
        </div>
        <div className="movie-information">
          <p className="movie-information-content">
            <span className="movie-information-key">Title - </span>
            <span className="movie-information-value">{this.movieName}</span><br />
            <span className="movie-information-key">Runtime - </span>
            <span className="movie-information-value">{this.movieRuntime}</span><br />
            <span className="movie-information-key">Release Date - </span>
            <span className="movie-information-value">{this.movieReleaseDate}</span><br />
          </p>
        </div>
      </div>
    )
  }
}

export default MovieItem
