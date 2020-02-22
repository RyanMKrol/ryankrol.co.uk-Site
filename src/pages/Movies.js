import React, { Component } from 'react'
import fetch from "node-fetch"

import { MovieItem, LoadingIcon } from './../components'
import { MOVIES_PAGE_DATA } from './../data/MoviesPageData'

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
    if (typeof this.state.movies === "undefined") {
      return <LoadingIcon />
    }

    return this.state.movies.map((movie) => (
      <MovieItem
        key={movie.imdbID}
        movieName={movie.Title}
        movieThumbnail={movie.Poster}
        movieRuntime={movie.Runtime}
        movieReleaseDate={movie.Released}
      />
    ))
  }

  generatePageSummary() {
    if (typeof this.state.movies === "undefined") {
      return null
    }

    return (
      <div className="movies-page-summary">
        <h3>
          {MOVIES_PAGE_DATA.summary}
        </h3>
      </div>
    )
  }

  render() {
    const content = this.generateMovieItems()
    const pageSummary = this.generatePageSummary()

    return (
      <div className="movies-page-body">
        <div className="Movies">
          {pageSummary}
          {content}
        </div>
      </div>
    );
  }
}


export default Movies;
