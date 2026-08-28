// Kanye lyric easter eggs, keyed by placement.
// Only sidebar, notFound, and console link out; the rest stay plain text by
// design - a clickable lyric only reads as a discovery while most aren't.
// Quotes render unattributed - song and album back the hover title unless a
// quote sets its own.

// The one outbound destination for the eggs: a Kanye song ranker I built.
export const RANKER_URL = 'https://kanyeranker.com';

// Named so the hover reveals where the click goes before it happens.
const RANKER_TITLE = "Rank Kanye's songs at kanyeranker.com";

const quotes = {
  sidebar: {
    text: 'Reach for the stars, so if you fall, you land on a cloud',
    song: 'Homecoming',
    album: 'Graduation',
    url: RANKER_URL,
    title: RANKER_TITLE,
  },
  notFound: {
    text: 'Run away as fast as you can',
    song: 'Runaway',
    album: 'My Beautiful Dark Twisted Fantasy',
    url: RANKER_URL,
    title: RANKER_TITLE,
  },
  about: {
    text: "Name one genius that ain't crazy",
    song: 'Feedback',
    album: 'The Life of Pablo',
  },
  stats: {
    text: "That that don't kill me can only make me stronger",
    song: 'Stronger',
    album: 'Graduation',
  },
  education: {
    text: 'Late Registration',
    song: 'Late Registration',
    album: 'Late Registration',
  },
  vegan: {
    text: 'This is a God dream',
    song: 'Ultralight Beam',
    album: 'The Life of Pablo',
  },
  console: {
    text: "I'm doing pretty good as far as geniuses go",
    song: 'POWER',
    album: 'My Beautiful Dark Twisted Fantasy',
    url: RANKER_URL,
  },
};

// Shown briefly when the theme is toggled - both tracks are from MBDTF.
export const themeQuotes = {
  light: {
    text: 'All of the Lights',
    song: 'All of the Lights',
    album: 'My Beautiful Dark Twisted Fantasy',
  },
  dark: {
    text: 'Dark Fantasy',
    song: 'Dark Fantasy',
    album: 'My Beautiful Dark Twisted Fantasy',
  },
};

export default quotes;
