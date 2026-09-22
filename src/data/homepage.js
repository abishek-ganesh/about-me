// Homepage data - Sections for TOC navigation and content
import { teaserQuote } from './teaching';

// Section configuration for sidebar TOC
export const homepageSections = [
  { id: 'about', label: 'About' },
  { id: 'signposts', label: 'Around the Site' },
];

// The homepage's index into the rest of the site. Each card quotes the page it
// points at: Francisco is a real student, the other three are each page's own
// strongest line, so nothing here has to be kept in sync with invented copy.
export const signposts = [
  {
    quote: teaserQuote.text,
    name: teaserQuote.name,
    cta: 'Read more student feedback',
    to: '/teaching',
  },
  {
    quote: 'How does he get his protein?',
    cta: 'Read why I went plant-based',
    to: '/vegan',
  },
  {
    quote: 'Bringing life to characters, stories, and more, all without AI.',
    cta: 'Hear the demo reel',
    to: '/voiceover',
  },
  {
    quote: 'A 4.0 in computer science at Georgia Tech handed me the tools.',
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
  intro: "Technology should help people. So should the people who build it.",
  bio: [
    "I started in mathematics and came out the other side with a master's in computer science. In between, after moving to California, I kept taking classes while working full-time: marketing, business administration, project management, a stack of certifications. I've never been much good at staying in one lane. I've been deploying AI in production for years, from classical machine learning through the transformer revolution to today's LLMs and agentic systems. I don't specialize in a single paradigm. What carries over from the math is the conviction that at the end of the day it's all just math, and anything built out of math can be explained to anyone willing to sit with it.",
    "That belief is why I teach. I lead an intensive AI bootcamp and I'm VP of Technology & AI at Appa Health, where the whole point of the technology is connecting students with mentors who change their trajectory. I've shipped AI for Fortune 500 enterprises, healthcare startups, nonprofits, and local government, but the work I'm proudest of is watching someone with no technical background realize they can build a neural network.",
    "The rest of me leaks into the work more than it probably should. I'm a voice actor, so I think about pacing and delivery when I'm explaining backpropagation to a room. I'm a Ye fan, so there are lyrics tucked across this site for anyone who goes looking. And I'm vegan with a well-stamped passport and a real dream of becoming the next Anthony Bourdain, telling the story of a place through the food that's already there.",
  ],
};
