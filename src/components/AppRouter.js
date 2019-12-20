import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import {
  Home,
  About,
  Portfolio,
  Music,
} from "./../pages"

import Header from "./Header"
import Footer from "./Footer"

import './AppRouter.css';

export default function AppRouter() {
  return (
    <div id="root-container">
      <Router>
        <Header />
        <div className="page-body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}
