// Kanye lyric easter eggs, keyed by placement.
// `url` and `attribution` are optional - entries without a url render unlinked,
// and entries with attribution: false skip the "- Ye" line (used for wordplay,
// not actual lyrics).

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
    url: 'https://www.youtube.com/watch?v=Bm5iA4Zupek',
  },
  about: {
    text: "Name one genius that ain't crazy",
    song: 'Feedback',
    album: 'The Life of Pablo',
    url: 'https://www.youtube.com/watch?v=tHi4_VKiE9M',
  },
  stats: {
    text: "That that don't kill me can only make me stronger",
    song: 'Stronger',
    album: 'Graduation',
    url: 'https://www.youtube.com/watch?v=bix4bzjr2k0',
  },
  education: {
    text: 'Late Registration',
    song: 'Late Registration',
    album: 'Late Registration',
    url: 'https://music.youtube.com/playlist?list=OLAK5uy_k27VU0k4lJb4oI67PLZTwYQGL5fkArahU',
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
