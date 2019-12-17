import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"

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
          </Switch>
        </div>
      </Router>
    </div>
  )
}
