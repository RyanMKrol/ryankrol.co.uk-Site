import React from 'react';
import {
  Link
} from "react-router-dom"
import logo from './../assets/logo.svg';
import './About.css';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <img src={logo} className="About-logo" alt="logo" />
        <p>
          About Page - Under Development!
        </p>
      </header>
    </div>
  );
}

export default About;
