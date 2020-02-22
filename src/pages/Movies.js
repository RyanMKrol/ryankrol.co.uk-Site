import React, { Component } from 'react'
import { MovieItem, LoadingIcon } from './../components'
import fetch from "node-fetch"

import './Movies.css';

const ALBUM_API_ENDPOINT = "http://www.ryankrol.co.uk/api/movies"

class Movies extends Component {
  constructor() {
    super()

    this.state = {
      movies: undefined
    }

    fetch(ALBUM_API_ENDPOINT).then((response) => {
      return response.json()
    }).then((movieData) => {
      this.setState({
        movies: movieData
      })
    })
  }

  generateMovieItems() {
    return this.state.movies.map((movie) => (
      <MovieItem
        key={movie.movieLink}
        movieName={movie.Title}
        movieThumbnail={movie.Poster}
        movieRuntime={movie.Runtime}
        movieReleaseDate={movie.Released}
      />
    ))
  }

  render() {
    const content = (typeof this.state.movies !== "undefined") ?
      this.generateMovieItems() :
      <LoadingIcon />

    return (
      <div className="movies-page-body">
        <div className="Movies">
          {content}
        </div>
      </div>
    );
  }
}


export default Movies;
