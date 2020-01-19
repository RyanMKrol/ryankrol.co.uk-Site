import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import {
  Home,
  Portfolio,
  Music,
  Books,
} from "./../pages"

import Header from "./Header"
import Footer from "./Footer"

import './AppRouter.css';

export default function AppRouter() {
  return (
    <div id="root-container">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  )
}
