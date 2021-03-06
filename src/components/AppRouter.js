import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Playground, Portfolio, Music, Books, Movies } from './../pages'

import Header from './Header'
import Footer from './Footer'

import './AppRouter.css'

export default function AppRouter() {
  return (
    <div id="root-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect
              to={{
                pathname: '/portfolio'
              }}
            />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/playground">
            <Playground />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
