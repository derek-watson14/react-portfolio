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
  img: 'profil.jpg',
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
      "The project was built in about 10 days using a MERN stack. I was our team's back end lead, and was primarily responsible for building models for our MongoDB collections as well as writing routes for the many API endpoints.",
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
    img: 'flipit.png',
    title: 'FlipIt: online flashcards',
    info:
      'FlipIt is a flashcard study aplication I built with a team of three during my UW course. It allows users to create an account, create decks of flashcards, search for decks made by other users and study the cards within the decks.',
    info2:
      'The project was created with Node.js, Express, MySQL and Sequelize on the backend and regular JS, CSS HTML and a bit of jQuery on the front end. I was mostly responsible for the back end on this project but also did a fair bit on the front end.',
    url: 'https://flipitstudy.herokuapp.com/',
    repo: 'https://github.com/AychDubya/Flipit',
  },
  {
    id: nanoid(),
    img: 'drinkme.png',
    title: 'drinkMe: find cocktail recipes and bars',
    info:
      'drinkME was the first group project for the UW full stack coding bootcamp, and was my first experience using git with multiple contributors. I was mostly responsible for the page design, which used Materialize CSS, and I also figured out the Google Maps portion of the site.',
    info2: '',
    url: 'https://derek-watson14.github.io/drinkME/',
    repo: 'https://github.com/derek-watson14/drinkME',
  },
  {
    id: nanoid(),
    img: 'hachikuchi.png',
    title: 'Hachi Kuchi: artist collective',
    info:
      "Hachi Kuchi is the website I made for my friend's artist collective, which was growing pre covid. Since then events have been cancelled and the site has not been updated.",
    info2:
      'The site was build using React with styled components and is the first site I built with Gatsby rather than create-react-app. Deployment on Netlify.',
    url: 'https://github.com/derek-watson14/hachi-kuchi',
    repo: 'https://hachikuchi.com/',
  },
  {
    id: nanoid(),
    img: 'photography.png',
    title: 'Photography: a gallery of photos from around the world',
    info:
      "This was my first ever HTML & CSS site, which showcased my travel photography. I'm including it here more for the photographs than the code",
    info2: '',
    url: 'https://github.com/derek-watson14/homepage',
    repo: 'https://derek-watson14.github.io/homepage/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together? Reach me at:',
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
