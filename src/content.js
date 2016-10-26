import wende from './images/wende_large.png';
import tomek from './images/tomek.png';
import tomekAvatar from './images/tomek_avatar.jpg';

import wendeAvatar from './images/wende_avatar.jpg';

import hajto_avatar from './images/hajto.jpg';
import hajto_image from './images/hajto_small.jpg';

import nextProject from './images/bg_2_small.jpg';

import reduxLogo from './images/redux_logo_scaled.png';
import nodeLogo from './images/nodejs_logo.png';
import phoenixLogo from './images/phoenix_logo.png';
import playLogo from './images/play_logo.png';

import everbuy_logo from "./images/everbuy_logo.jpg";
import everbuy_big from "./images/everbuy_big.png";
import lanceit_logo from "./images/lanceit_small.png";
import lanceit_big from "./images/lanceit_big.png";

import cloudCabLarge from "./images/cloudcab_large.png";
import cloudCabSmall from "./images/cloudcab_small.png";

// ugly hack to preload images
[hajto_image, tomek, wende, everbuy_big, lanceit_big, cloudCabLarge].map(src => {
  let image = new Image()
  image.src = src;
  return image
});

const content = {

  // header -> header in head section
  // description -> description in head section
  head: {
    header: "Experts in modern technologies",
    description: "We are group of experts in modern technologies, ready to make your next big thing real"
  },

  // color of icon
  // icon (font-awesome 4.6)
  // header
  // text
  services: [
    {
      color: "#424242",
      icon: "fa-code-fork",
      header: "Best solutions",
      text: "We can choose best technologies to solve real problems. No stagnation, always up to date."
    },
    {
      color: "#424242",
      icon: "fa-rocket",
      header: 'Rocket science',
      text: 'Yes, we create rocket science. We can make any stuff you want, just name it.'
    },
    {
      color: "#424242",
      icon: "fa-tachometer",
      header: 'Fast and reliable',
      text: 'Blazing fast, almost as fast as Elm and fault tolerant, just like Erlang.'
    }
  ],

  // name
  // img (img or img url)
  skills: [
    { name: 'React',
      img: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png' },
    { name: 'Node.js',
      img: nodeLogo },
    { name: 'Play',
      img: playLogo },
    { name: 'Elixir',
      img: 'https://avatars2.githubusercontent.com/u/1481354?v=3&s=400' },
    { name: 'Elm',
      img: 'https://avatars0.githubusercontent.com/u/4359353?v=3&s=200' },
    { name: 'Redux',
      img: reduxLogo },
    { name: 'Scala',
      img: 'http://1.bp.blogspot.com/-L3mR4A7tIYk/VeuLsxTrDOI/AAAAAAAAA78/sQM1qrvFRPw/s1600/scala-icon.png' },
    { name: 'Phoenix',
      img: phoenixLogo },
    { name: 'Electron' ,
      img: 'https://comsysto.files.wordpress.com/2015/09/electorn-logo-2.png?w=300&h=300' },
    { name: 'React Native',
      img: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png' },
    { name: 'Erlang',
      img: 'https://assets.toptal.io/uploads/blog/category/logo/2/erlang.png' },
    { name: 'Functional programming',
      img: 'http://payload.cargocollective.com/1/0/21463/2005376/lambda-films-logod.png' }
  ],

  // array -> plain text which is one paragraph in quality section
  quality: [
    "We never stop to learn new technologies which would allow us to maximize the productivity. We're not afraid of any new paradigm if it's able to make us better at what we do!",
    "We respect reusability in all manners. From the code we write, through libs we develop, to apps we make. We know that universal things make you and us save time and money without sacrificing any value of the service."
  ],

  // name
  // nick
  // small (img or img url)
  // large (img or img url)
  // stack: string
  // description
  team: [
    {
      name: "Krzysztof Wende",
      socialMedia: [
        { icon: 'fa-code', link: 'https://wende.github.io' },
        { icon: 'fa-github', link: 'https://github.com/wende' },
        { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/krzysztof-wende-22b98b7b' },
        { icon: 'fa-stack-overflow', link: 'http://stackoverflow.com/users/2086804/krzysztof-wende' },
        { icon: 'fa-twitter', link: 'https://twitter.com/iraasta' }
      ],
      small: wendeAvatar,
      large: wende,
      stack: "Elixir, Scala, Erlang, Node.js, Project Managment, Functional Programming, Distributed Systems",
      description: "Scalable and distributed server developer. Startup business tech advisor"
    },
    {
      name: "Tomasz Cichocinski",
      socialMedia: [
        { icon: 'fa-github', link: 'https://github.com/baransu' },
        { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/tomaszcichocinski/en' },
        { icon: 'fa-stack-overflow', link: 'http://stackoverflow.com/users/5531178/tomasz-cichoci%C5%84ski?tab=profile' },
        { icon: 'fa-twitter', link: 'https://twitter.com/sajgonek123' }
      ],
      small: tomekAvatar,
      large: tomek,
      stack: "JavaScript, React, Redux, Elm, Node.js, Build systems",
      description: "All kinds of front-end. Tomek is web development and game programming hothead, who's always trying to find best solutions and best tools for the given job. Spending all free time discovering new technologies and mastering already known. He's providing front-end expertise to the whole team."
    },
    {
      name: "Jakub Hajto",
      socialMedia: [
        { icon: 'fa-github', link: 'http://github.com/hajto' },
        { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/jakub-hajto-714050b1' },
        { icon: 'fa-stack-overflow', link: 'http://stackoverflow.com/users/4067967/haito'}
      ],
      small: hajto_avatar,
      large: hajto_image,
      stack: "Elixir, Scala, Docker, Jenkins",
      description: "Functional Programming Ninja, he jumps between technologies to get the best out of them. Currently fallen in love with Elixir simplicity and performance."
    }
  ],

  // name
  // who
  // quote
  testimonials:[
    {
      name: "Sleek Total Inc.",
      who:"",
      quote: "Very talented coder, goes the extra mile to make sure you are satisfied with his work. Knows programming concepts and Unity like the back of his hand. I am very satisfied with his service." },
    {
      name: "Mehul Goswami",
      who:"Graphic House Inc.",
      quote: "High quality code delivered fast. I've used a number of service providers and feel Neon Tree Solutions is right at the top." },
    {
      name: "Marcin Klocek",
      who:"Co-worker, WideTech Colombia",
      quote: "As a Project Manager with Widetech, NTS is very well organized and has wide knowledge of web and servers programming concepts. They help a lot and happily devide with their big programming experience. Privately, they're very friendly guys." }
  ],


  // name
  // short (short description under project name)
  // description (optional if next == true)
  // stack (optional if next == true)
  // small (img or img url)
  // large (img or img url) (optional if next == true)
  // OPTIONAL next -> if true click scrolls to contact form
  projects: [
    {
      name: "Lancelt",
      short: "Local tasks outsouring system",
      description: "Lanceit was designed to allow you to outsource your everyday annoying little jobs like mowing your lawn or delivering your favorite meal to you from another side of the city.",
      stack: "Play Scala, Java, Android",
      small: lanceit_logo,
      large: lanceit_big
    },
    {
      name: "CloudCab",
      short: "Innovative system for taxi bases",
      description: "Cloud Cab is innovative automated taxi dispatch system. It provides real-time data feed to dispatcher about current load. Drivers are getting information about closest potential clients and are automatically queued to pick them up based on Geo Logical location.",
      stack: "Node.js, Java, Android",
      small: cloudCabSmall,
      large: cloudCabLarge
    },
    {
      name: "Everbuy",
      short: "Tracks items on bidding platforms.",
      description: "This application is solution to missing an item auction on your bidding platform of choice. System monitors auction systems for offers that match your criteria and if it founds any it will display a notification with link. ",
      stack: "Meteor Framework, Android",
      small: everbuy_logo,
      large: everbuy_big
    },
    {
      name: "Your next great project",
      short: "Any great idea you can think of",
      small: nextProject,
      next: true // have to be next to provide scroll to contact form
    }
  ],

  // header
  // icon (font-awesome 4.6)
  // text: array of lines
  // OPTIONAL type -> tel/mailto for a href="tel:/mailto:"
  contacts: [
    {
      header: 'Address',
      icon: 'fa-map-marker',
      text: [
        '220C Blythe Road,',
        'W14 0HH London,',
        'England'
      ]
    },
    {
      header: 'E-mail',
      icon: 'fa-envelope-o',
      type: "mailto",
      text: [
        'contact@neontree.pl',
        'jobs@neontree.pl',
        'chris@neontree.pl'
      ]
    },
    {
      header: 'Telephone',
      type: "tel",
      icon: 'fa-phone',
      text: ['+048 533 302 090']
    }
  ]

};

export default content;
