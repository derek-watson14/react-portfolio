import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derek Watson | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Web Development portfolio for Derek Watson!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey there! I'm",
  name: 'Derek',
  subtitle: 'and I like to build stuff with code.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm an aspiring web developer from the small town of Indianola, Washington who recently completed (and learned a lot from) the University of Washington Full Stack Web Dev Bootcamp. Prior to that, I had done about a year and a half of self-teaching including HarvardX's CS50 on edX and courses from various online instructors.",
  paragraphTwo:
    "I'm always looking to learn to write cleaner code, improve my skills in design and expand my abilities as a developer.",
  paragraphThree:
    'Outside of web development, I graduated from Washington State University with a degree in Communication in 2014, spent five years travelling internationally, know German to a CEFR B2 (intermediate) level, and am a 20-40km a week runner.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'planit.png',
    title: 'PLANiT: collaborative trip planning',
    info:
      "PLANiT was my group of five's final project for the UW Coding Bootcamp. Our idea was to build a site that would allow users to sign up and create 'trip planning boards', to which they could invite friends and add/vote on ideas.",
    info2:
      "The project was built with a MERN stack. I was our team's back end lead, and was primarily responsible for building models for our MongoDB collections as well as writing routes for the many API endpoints.",
    url: 'https://travelplanit.herokuapp.com/',
    repo: 'https://github.com/zackdeacon/planit-backend',
  },
  {
    id: nanoid(),
    img: 'derdiedas.png',
    title: 'DerDieDas: practice your German',
    info:
      'I created DerDieDas in early 2019 when I was living in Germany and first learning both German and programming. Learning things like German noun genders and preposition cases was challenging so I hoped to put my new programming skills to the test and build a study application.',
    info2:
      'DerDieDas was built with Flask (Python) and PostgreSQL on the backend and normal HTML, CSS and Javascript on the front. As I built the entire thing on my own, it remains one of the projects I am most proud of.',
    url: 'https://deutsch-grammatik.herokuapp.com/about',
    repo: 'https://github.com/derek-watson14/DerDieDas',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'FlipIt: online flashcards',
    info:
      'FlipIt is a flashcard study aplication I built with a team of three others from my UW course. It allows users to create an account, create decks of flashcards, search for decks made by other users and study the cards within the decks. Created with Node.js, Express, jQuery, mySQL and Sequelize, among other technologies.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
