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
    cta: 'Read more student feedback',
    to: '/teaching',
  },
  {
    quote: 'How does he get his protein?',
    cta: 'Read why I went plant-based',
    to: '/vegan',
  },
  {
    quote: 'None of that was a detour.',
    cta: 'Read the long way around',
    to: '/about',
  },
  {
    quote: 'I build AI that works for people, not instead of them.',
    cta: 'See the full resume',
    to: '/resume',
  },
];

// Sits beside the bio - the Bourdain line in the last paragraph, as a photo.
export const aboutPhoto = {
  src: '/images/home/salvei-vegan-mexico.jpg',
  alt: 'Abishek smiling outside Salvei, a vegan restaurant in Mexico, lit by string lights at night',
  caption: 'Mexico. Research for the Bourdain thing.',
};

// About section content
export const aboutContent = {
  intro: "Technology should help people.",
  bio: [
    "I was raised by Indian parents but grew up in central Ohio, so I had a hard time connecting with people at a young age. I held onto the two things that didn't need translating. Mathematics is the language of the universe, and a swish is a swish anywhere in the world. Mathematics turned into AI, and basketball turned into a lifelong thing for fitness.",
    "Today I'm VP of Technology & AI at Appa Health, where the whole point of the technology is to foster human connection between certified, credentialed mentors and teenagers. Along the way I worked in Silicon Valley and shipped AI for Fortune 500 enterprises, healthcare startups, and nonprofits.",
    "Underneath the hype, it's all just math, and anything built from it can be explained to anyone willing to sit with it. That's why I teach. I'm leading the first Applied AI Engineer Bootcamp from Columbia Engineering and Fullstack Academy, and the work I'm proudest of is watching someone with no technical background realize they can build a neural network.",
    "I don't play much basketball anymore (protecting the knees), so the outlet became yoga, meditation, and weightlifting. I still watch plenty: my Ohio State Buckeyes every Saturday, the Seahawks every Sunday in the fall, and LeBron, from the great state of Ohio.",
    "I'm a Ye fan, so there are lyrics tucked across this site for anyone who goes looking. And I'm vegan with a well-stamped passport and a real dream of becoming the next Anthony Bourdain, telling the story of a place through the food that's already there.",
  ],
};
