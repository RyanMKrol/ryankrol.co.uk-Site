import React from 'react';

import styles from './AboutMeSubPage.module.css';

/**
 * Page introducing the site
 *
 * @returns {string} JSX Content
 */
function AboutMeSubPage() {
  return (
    <div>
      <p className={'highlighted'}> Hi! My name is </p>
      <h1 className={styles.name}>Ryan Krol.</h1>
      <h2>Welcome to my website!</h2>
      <p>
        I'm a London-based software engineer, currently working at Amazon UK building and
        maintaining acquisition experiences for PrimeVideo. If you have ever paid for a film/tv show
        that was streamed on Amazon, the chances are you've used my code!
      </p>
      <p>
        In my spare time, I like to hack together side projects just like this website, and many
        others that will no doubt be detailed somewhere on this site.
      </p>
      <p>
        I've recently been enjoying keeping track of the films and albums I've been enjoying, so if
        you care about my opinion on anything, you can find what I think of those here too :D
      </p>
    </div>
  );
}

export default AboutMeSubPage;
