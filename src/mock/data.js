import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derek Watson | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Web Development portfolio for Derek Watson!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey there! My name is',
  name: 'Derek',
  subtitle: 'and I like to make stuff with code.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profil.jpg',
  paragraphOne:
    "I'm Derek Watson, a web developer from the Puget Sound region who is looking for a professional opportunity. I recently completed the University of Washington's full stack web development bootcamp, prior to which I had done about a year and a half of self-teaching, including HarvardX's CS50 on edX and courses from various online instructors.",
  paragraphTwo:
    "Most of my skills focus on web development. I am proficient in HTML, CSS/SASS and JavaScript (Node, Express, React, jQuery) and  familiar with SQL, MongoDB and Python (Flask). I'm always looking to learn to write cleaner code, improve my skills in design and expand my abilities as a developer.",
  paragraphThree:
    'Outside of web development, I graduated from Washington State University with a degree in Strategic Communication in 2014, spent five years travelling internationally, know German to a CEFR B2 (advanced-intermediate) level, and am a 20-40km a week runner.',
  resume: 'https://drive.google.com/file/d/1runsvcCB5PJv3IFz5j_HSYRF-eANzRKF/view',
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
    img: 'derdiedas.png',
    title: 'DerDieDas: practice your German',
    info:
      'I created DerDieDas in early 2019 when I was living in Germany and first learning both German and programming. Learning things like German noun genders and preposition cases was challenging, so I hoped to put my new programming skills to the test and build a study application.',
    info2:
      'DerDieDas was built with Flask (Python) and PostgreSQL on the back end and normal HTML, CSS and Javascript on the front. As I built the entire thing with only Google for assistance, it remains one of the projects I am most proud of.',
    url: 'https://deutsch-grammatik.herokuapp.com/about',
    repo: 'https://github.com/derek-watson14/DerDieDas',
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
    img: 'drinkme.png',
    title: 'drinkMe: find cocktail recipes and bars',
    info:
      'drinkME was the first group project for the UW full stack coding boot camp, and was my first experience using git with multiple contributors. I was mostly responsible for the page design, which used Materialize CSS, and I also figured out the Google Maps portion of the site.',
    info2: 'This project was built with HTML, Materialize CSS, JavaScript and jQuery.',
    url: 'https://derek-watson14.github.io/drinkME/',
    repo: 'https://github.com/derek-watson14/drinkME',
  },
  {
    id: nanoid(),
    img: 'photography.png',
    title: 'Photography: a gallery of photos from around the world',
    info:
      "This was my first ever HTML & CSS site, built as an assignment for the online HarvardX course CS50. I'm including it here more because it showcases my photography than for it's codebase.",
    info2:
      'I spent about half of each year from 2015 to 2019 travelling through Asia, Central America, Australia and Europe. The other half of the year I spent working on tug boats here in the Puget Sound to save money. These photographs are the product of that time of my life.',
    url: 'https://derek-watson14.github.io/homepage/',
    repo: 'https://github.com/derek-watson14/homepage',
  },
  {
    id: nanoid(),
    img: 'hachikuchi.png',
    title: 'Hachi Kuchi: artist collective',
    info:
      "Hachi Kuchi is the website I made for my friend's artist collective, which was becoming quite active pre-Covid. Since then events have been cancelled and the site is in need of an information update.",
    info2:
      'The site was built using Gatsby (React) with styled components and was deployed on Netlify.',
    url: 'https://hachikuchi.com/',
    repo: 'https://github.com/derek-watson14/hachi-kuchi',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to reach out? Get a hold of me at:',
  btn: "Let's chat",
  email: 'derek.watson92@gmail.com',
  phone: '(360) 930-2390',
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
