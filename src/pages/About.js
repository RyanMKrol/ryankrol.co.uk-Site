import React from 'react';

import logo from './../assets/logo.svg';

import './About.css';

function About() {
  return (
    <div className="container">
      <div className="About">
        <img src={logo} className="About-logo" alt="logo" />
        <p>
          About Page - Under Development!
        </p>
      </div>
    </div>
  );
}

export default About;
