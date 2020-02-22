import React from 'react'
import {
  faToolbox,
  faGuitar,
  faReceipt,
  faBell,
  faCalendarAlt,
  faCode,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PORTFOLIO_PAGE_DATA = {
  summary: "Check out some of the stuff I've been working on!",
  portfolioItems: [
    {
      portfolioHeader: "ryankrol.co.uk",
      portfolioItemLink: "https://github.com/RyanMKrol/ryankrol.co.uk",
      portfolioDescription: "Of course this site lives in my portfolio too! Having spent 2 years at Amazon, I've had the opportunity to work with prominent front-end technologies that enabled me to make my own website (no more using templates found online). With my experience in React, I built this site from scratch using a React front-end with an Express server on the backend to fetch data that powers certain pages (check out my music and book tastes!). I was also able to use skills that I don't have the opportunity to at work, e.g. setting up infrastructure in AWS (EC2 for hosts, Route53 for DNS binding), setting up the reverse proxy with Nginx, setting up my own APIs from scratch with Express.",
      portfolioMedia: (
        <FontAwesomeIcon
          icon={faCode}
          size="6x"
        />
      ),
      portfolioItemTags: ["react", "aws", "ec2", "route53", "express", "node", "website", "javascript", "frontend"],
    },
    {
      portfolioHeader: "SwiftToolbox",
      portfolioItemLink: "https://github.com/RyanMKrol/SwiftToolbox",
        portfolioDescription: "SwiftToolbox is a project I started when I started using the Swift language more in my personal projects. I found myself repeating code across projects, so I thought it would be a good idea to have a package to share utilities I made to prevent code duplication, and make updating multiple projects at once easier. These utilities include API calls, sending emails, setting up configuration, API response parsing, etc.",
      portfolioMedia: (
        <FontAwesomeIcon
          icon={faToolbox}
          size="6x"
        />
      ),
      portfolioItemTags: ["swift", "backend", "utils"],
    },
    {
      portfolioHeader: "ConcertFinder",
      portfolioItemLink: "https://github.com/RyanMKrol/ConcertFinder",
      portfolioDescription: "Living in London, there are a tonne of events happening every day; it's hard to keep up with what I might be interested in. To help solve this problem, I made a project that tracks what I'm listening to, and then recommends upcoming concerts based on those listening habits! This utilises the LastFM API to track my listening activity, and then the Songkick API to find upcoming concerts. The project uses travis to test and deploy the code to the server, which then sets up a cron job to send you a weekly digest of upcoming events.",
      portfolioMedia: (
        <FontAwesomeIcon
          icon={faGuitar}
          size="6x"
        />
      ),
      portfolioItemTags: ["swift", "backend", "tools"],
    },
    {
      portfolioHeader: "SneakersNotificationCenter",
      portfolioItemLink: "https://github.com/RyanMKrol/SneakersNotificationCenter",
      portfolioDescription: "As a lover of sneakers, there's nothing worse than missing a new release with every supplier sold out. I found that if I didn't check certain shopping apps/sites multiple times a week, I would frequently miss new releases; so I needed something to do this for me. To get around this problem, I created a server app that frequently checks the sites I follow for new releases and then emails myself, and the email list, when there is something new to check out!",
      portfolioMedia: (
        <FontAwesomeIcon
          icon={faBell}
          size="6x"
        />
      ),
      portfolioItemTags: ["swift", "backend", "tools"],
    },
    {
      portfolioHeader: "WheresMyMoney?!",
      portfolioItemLink: "https://github.com/RyanMKrol/WheresMyMoney",
      portfolioDescription: "Living in London, everything is crazy expensive. Realising this, I wanted to make a little utility that helps me figure out where my money is going every month, and get a handle on my finances. My solution is basic but is configurable enough to be used by anybody. It takes in a CSV file, and a user-defined config that is used to bucket your purchases and see where your money went!",
      portfolioMedia: (
        <FontAwesomeIcon
          icon={faReceipt}
          size="6x"
        />
      ),
      portfolioItemTags: ["node", "backend", "tools"],
    },
    {
      portfolioHeader: "TheBestOfToronto",
      portfolioItemLink: "https://github.com/RyanMKrol/TheBestOfToronto",
      portfolioDescription: "Between 2015-16, I lived in Toronto, Canada. There were so many options for things to do that I was spoiled for choice, and would often spend more time deliberating on what was available, instead of just getting out there and doing something! Seeing this problem, I wanted a way to cut through the noise, and make a decision quickly so I made a website to choose for me. This would poll a popular Toronto blog which maintained hundreds of 'Best-Of' lists, and then pick one at random for me to do!",
      portfolioMedia: (
        <FontAwesomeIcon
          icon={faCalendarAlt}
          size="6x"
        />
      ),
      portfolioItemTags: ["node", "backend", "tools", "scripting"],
    }
  ]
}

export { PORTFOLIO_PAGE_DATA }
