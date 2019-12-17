import React from 'react';
import {
  Link
} from "react-router-dom"
import logo from './../assets/logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Home Page - Under Development!
        </p>
      </header>
    </div>
  );
}

export default Home;
