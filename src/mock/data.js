import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derek Watson | Software Developer',
  lang: 'en',
  description: 'Web Development portfolio for Derek Watson',
};

// HERO DATA
export const heroData = {
  title: 'Welcome! My name is',
  name: 'Derek Watson',
  subtitle: "and I'm a computer programmer and data-enthusiast.",
  cta: 'More about me',
};


// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "As an aspiring data/software engineer with a degree in strategic communication and experience in web application development, I have been working toward a career in tech for years.",
  paragraphTwo:
    "I initially learned through online resources and courses, and later attended a coding bootcamp to further develop my skills. Currently, I am deepening my knowledge of computer science and enhancing my data analytics skills through a second bachelor's degree at the University of Colorado.",
  paragraphThree:
    "Despite the challenges and rigors of these courses, I am now equipped with a deeper understanding of computer science fundamentals beyong 'coding' as a skill. As a result, I feel better equipped than ever to work in this field and quickly adapt to new technologies in order to solve problems effectively.",
  resume: 'https://docs.google.com/document/u/1/d/e/2PACX-1vRRrXf4WywUJI7hhfCc5xOWeJNzWWK1HdU8U-ZKX0IHepqYTonjJmkbmS7KLw74MkLL2Q64_Wg_FO41/pub',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'organic-gold.png',
    title: 'Organic Gold Music: band & recording studio',
    info:
      'Organic Gold is a band and new recording studio based on Bainbridge Island, WA. They needed a website where they could showcase their music, communicate about events and recieve studio requests.',
    info2:
      'This is the first site I was paid for and was built with Gatsby (React) and Sanity.io for a headless CMS. The data layer uses GraphQL and contact emails are sent via a serverless function.',
    url: 'https://organicgoldmusic.com/',
    repo: 'https://github.com/derek-watson14/organic-gold',
  },
  {
    id: nanoid(),
    img: 'planit.png',
    title: 'PLANiT: collaborative trip planning',
    info:
      "PLANiT was my group of five's final project for the UW Coding Bootcamp. Our idea was to build a site that would allow users to sign up and create 'trip planning boards', to which they could invite friends and then add or vote on ideas for the trip.",
    info2:
      "The project was built in about 10 days using a MERN (MongoDB, Express, React, Node) stack. I was our team's back end lead, and was primarily responsible for building models for our MongoDB collections, writing routes for the many API endpoints and helping the front end team integrate into the API.",
    url: '',
    repo: 'https://github.com/zackdeacon/planit-backend',
  },
  {
    id: nanoid(),
    img: 'salsmanug.png',
    title: 'Salsman Construction: brochure site for local contractor', 
    info:
      'I built the website for Salsman Construction (formerly Salsman Underground) in early 2021. The company had no web presence and needed a site to showcase their work and provide contact information.',
    info2:
      'Salsman Construction was built using WordPress, Elementor and the Wordpress CMS. Some custom CSS and HTML was used to style the site, but most of the design was done with Elementor.',
    url: 'https://salsmanunderground.com/#about',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'flipit.png',
    title: 'FlipIt: online flashcards',
    info:
      'FlipIt is a flashcard study application I built with a team of four during my UW course. It allows users to create an account, create decks of flashcards, search for decks made by other users and study the cards within the decks.',
    info2:
      'The project was created with Node.js, Express, MySQL and Sequelize on the back end and regular JS, CSS, HTML and a bit of jQuery on the front end. I was mostly responsible for setting up our database schemas and API routes, but I also did a fair bit on the front end.',
    url: '',
    repo: 'https://github.com/AychDubya/Flipit',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to reach out? Get a hold of me at:',
  btn: "Resume",
  email: 'derek.watson92@gmail.com',
  phone: '+1 (360) 930-2390',
  resume: 'https://docs.google.com/document/u/1/d/e/2PACX-1vRRrXf4WywUJI7hhfCc5xOWeJNzWWK1HdU8U-ZKX0IHepqYTonjJmkbmS7KLw74MkLL2Q64_Wg_FO41/pub',
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
