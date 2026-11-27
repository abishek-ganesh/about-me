// Homepage data - Sections for TOC navigation and content
import { teaserQuote } from './teaching';

// Section configuration for sidebar TOC
export const homepageSections = [
  { id: 'about', label: 'About' },
  { id: 'signposts', label: 'Around the Site' },
];

// The homepage's index into the rest of the site. Each card quotes the page it
// points at (a real student for Teaching, the page's own strongest line for the
// rest), so nothing here has to be kept in sync with invented copy.
export const signposts = [
  {
    quote: teaserQuote.text,
    cta: 'read more student feedback',
    to: '/teaching',
  },
  {
    quote: 'How does he get his protein?',
    cta: 'read why I went plant-based',
    to: '/vegan',
  },
  {
    quote: 'None of that was a detour.',
    cta: 'read the long way around',
    to: '/about',
  },
  {
    quote: 'I build AI that works for people, not instead of them.',
    cta: 'see the full resume',
    to: '/resume',
  },
];

// Sits beside the bio - the Bourdain line in the last paragraph, as a photo.
export const aboutPhoto = {
  src: '/images/home/salvei-vegan-mexico.jpg',
  alt: 'Abishek smiling outside Salvei, a vegan restaurant in Mexico, lit by string lights at night',
  caption: 'Mexico..research for the Bourdain thing.',
};

// About section content
export const aboutContent = {
  intro: "Technology should help people.",
  bio: [
    "I was raised by Indian parents and grew up in central Ohio, so I had a hard time connecting with people at a young age..i held onto the two things that didn't need translating. i believe that mathematics is the language of the universe, and a swish is a swish anywhere in the world..years later, the love of math has turned into a love of artificial intelligence, and the love of basketball has turned into a lifelong thing for fitness.",
    "today I lead health tech startups where the whole point of the technology is to foster human connection between certified, credentialed mentors and teenagers. along the way I worked in Silicon Valley and shipped AI for Fortune 500 enterprises, healthcare startups, and nonprofits.",
    "underneath the hype, AI is all just math - and anything built from it can be explained to anyone willing to sit with it..that's why I teach. what LeBron is to basketball and Kanye is to music - the GOAT - I believe I am to this one niche: teaching people with little to no technical background to build real AI products that hundreds, if not thousands, of people use to improve their lives. my students are people who want to make a positive impact, find meaning, or build a stronger career.",
    "i don't play much basketball anymore (protecting the knees), so the outlet became yoga, meditation, and weightlifting..i still watch plenty - my Ohio State Buckeyes every Saturday, the Seahawks every Sunday in the fall, and LeBron, from the great state of Ohio.",
    "i'm a Kanye West fan, so there are lyrics tucked across this site for anyone who goes looking..and I'm vegan with a well-stamped passport and a real dream of becoming the next Anthony Bourdain - telling the story of a place through the food that's already there.",
  ],
};
