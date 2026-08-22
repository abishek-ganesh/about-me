// Kanye lyric easter eggs, keyed by placement.
// Only the sidebar entry links out; the rest are plain text by design.
// `attribution: false` skips the "- Ye" suffix (used for wordplay, not lyrics).

const quotes = {
  sidebar: {
    text: 'Reach for the stars, so if you fall, you land on a cloud',
    song: 'Homecoming',
    album: 'Graduation',
    url: 'https://youtu.be/LQ488QrqGE4?t=125',
  },
  notFound: {
    text: 'Run away as fast as you can',
    song: 'Runaway',
    album: 'My Beautiful Dark Twisted Fantasy',
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
    attribution: false,
  },
  console: {
    text: "I'm doing pretty good as far as geniuses go",
    song: 'POWER',
    album: 'My Beautiful Dark Twisted Fantasy',
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
