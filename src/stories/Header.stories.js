import React from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom"
import Header from './../components/Header'

export default {
  title: 'Header',
};

export const normal = () => (
  <Router><Header /></Router>
)
