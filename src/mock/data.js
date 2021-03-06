import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derek Watson | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Web Development portfolio for Derek Watson', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome! My name is',
  name: 'Derek Watson',
  subtitle: "and I'm a computer programmer and technology-lover.",
  cta: 'More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "Since graduating from Washington State University in 2014 with a degree in the decidedly non-STEM field of communications, I've focused my life around travel - visiting and living in places across Asia, Australia, Europe and Latin America.",
  paragraphTwo:
    "To finance my travels, I worked seasonally in the maritime industry. At some point I decided that that wasn't what I wanted to do forever, and in 2018 I began taking computer programming courses online. I quickly found it was something I truly enjoyed doing. In 2020 I completed a coding bootcamp at the University of Washington and now, wanting to improve my fundamentals, I'm preparing to return to college online to study computer science in 2022.",
  paragraphThree:
    "My expertise lies primarily in web-related programming languages and frameworks. A list of technologies I'm familiar with can be found on my resume, linked below.",
  resume: 'https://docs.google.com/document/d/1Inc9zC3Ch67CiwF_n4cEsaZYwJrlquuI_tPq0RdZ0xM',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'planit.png',
    title: 'PLANiT: collaborative trip planning',
    info:
      "PLANiT was my group of five's final project for the UW Coding Bootcamp. Our idea was to build a site that would allow users to sign up and create 'trip planning boards', to which they could invite friends and then add or vote on ideas for the trip.",
    info2:
      "The project was built in about 10 days using a MERN (MongoDB, Express, React, Node) stack. I was our team's back end lead, and was primarily responsible for building models for our MongoDB collections, writing routes for the many API endpoints and helping the front end team integrate into the API.",
    url: 'https://travelplanit.herokuapp.com/',
    repo: 'https://github.com/zackdeacon/planit-backend',
  },
  {
    id: nanoid(),
    img: 'organic-gold.png',
    title: 'Organic Gold Music: band & recording Studio',
    info:
      'Organic Gold is a band and new recording studio based on Bainbridge Island, WA. They needed a website where they could showcase their music, communicate about events and recieve studio requests.',
    info2:
      'This is the first site I was paid for and was built with Gatsby (React) and Sanity.io for a headless CMS. The data layer uses GraphQL and contact emails are sent via a serverless function.',
    url: 'https://organicgoldmusic.com/',
    repo: 'https://github.com/derek-watson14/organic-gold',
  },
  {
    id: nanoid(),
    img: 'flipit.png',
    title: 'FlipIt: online flashcards',
    info:
      'FlipIt is a flashcard study application I built with a team of four during my UW course. It allows users to create an account, create decks of flashcards, search for decks made by other users and study the cards within the decks.',
    info2:
      'The project was created with Node.js, Express, MySQL and Sequelize on the back end and regular JS, CSS, HTML and a bit of jQuery on the front end. I was mostly responsible for setting up our database schemas and API routes, but I also did a fair bit on the front end.',
    url: 'https://flipitstudy.herokuapp.com/',
    repo: 'https://github.com/AychDubya/Flipit',
  },
  {
    id: nanoid(),
    img: 'derdiedas.png',
    title: 'DerDieDas: practice your German',
    info:
      'I created DerDieDas in early 2019 when I was living in Germany and first learning both German and programming. Learning things like German noun genders and preposition cases was challenging, so I hoped to put my new programming skills to the test and build a study application.',
    info2:
      'DerDieDas was built with Flask (Python) and PostgreSQL on the back end and normal HTML, CSS and Javascript on the front. As I built the entire thing with only Google for assistance, it remains one of the projects I am most proud of.',
    url: 'https://deutsch-grammatik.herokuapp.com/about',
    repo: 'https://github.com/derek-watson14/DerDieDas',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to reach out? Get a hold of me at:',
  btn: "Let's chat",
  email: 'derek.watson92@gmail.com',
  phone: '+1 (360) 930-2390',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/watsonderek/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/derek-watson14',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
