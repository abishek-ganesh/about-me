// Vegan page data - the energy story, the three decisions, and the dream.
// All first-person copy lives here so the page component stays layout-only.

export const veganSections = [
  { id: 'energy', label: 'The Energy' },
  { id: 'decisions', label: 'Three Decisions' },
  { id: 'dream', label: 'The Dream' },
];

// The Pisa kick, frame by frame - reads like a flip-book of one kick.
export const pisaSequence = [
  { src: '/images/vegan/pisa-kick-1.jpg', alt: 'Abishek mid-kick at the Leaning Tower of Pisa, frame 1' },
  { src: '/images/vegan/pisa-kick-2.jpg', alt: 'Abishek mid-kick at the Leaning Tower of Pisa, frame 2' },
  { src: '/images/vegan/pisa-kick-3.jpg', alt: 'Abishek mid-kick at the Leaning Tower of Pisa, frame 3' },
  { src: '/images/vegan/pisa-kick-4.jpg', alt: 'Abishek pointing at the Leaning Tower of Pisa, frame 4' },
];

export const foodPhoto = {
  src: '/images/vegan/food-chips-guac-salsa.jpg',
  alt: 'Abishek with a plate of chips, guacamole, and salsa',
  caption: "I didn't cook this one, but chips, guac, and salsa are a forever favorite.",
};

export const decisionPhotos = [
  {
    src: '/images/vegan/georgia-tech-graduation.jpg',
    alt: 'Abishek in cap and gown at Georgia Tech graduation, 2021',
    title: 'The Bet on AI',
    body: 'Georgia Tech, 2021. The masters that sealed decision number three.',
  },
  {
    src: '/images/vegan/family-italy.jpg',
    alt: 'Abishek laughing with his mom and sister in Italy',
    title: 'The People in Every Chapter',
    body: 'Italy with Mom and my sister - no decision on this list happened without them.',
    wide: true,
  },
];

export const dreamPhotos = [
  {
    src: '/images/vegan/sanctuary-monkey-1.jpg',
    alt: 'A capuchin monkey sitting on Abishek’s head at the Akumal Animal Sanctuary',
    title: 'New Friend',
    body: 'Akumal Animal Sanctuary, Mexico. He found the good seat.',
  },
  {
    src: '/images/vegan/sanctuary-monkey-2.jpg',
    alt: 'A capuchin monkey hugging Abishek’s head at the Akumal Animal Sanctuary',
    title: 'Practiced Compassion',
    body: 'This is the world I am talking about.',
  },
  {
    src: '/images/vegan/sanctuary-boa.jpg',
    alt: 'Abishek gently petting a boa constrictor at the Akumal Animal Sanctuary',
    title: 'All of Them',
    body: 'Even the ones that are harder to hug.',
    wide: true,
  },
];

// Ranked deliberately - this ordering is the point of the section.
export const lifeDecisions = [
  {
    rank: '01',
    title: 'Going Whole-Food Plant-Based',
    body:
      'The single most impactful decision of my life. It rebuilt my energy from the ground up and made everything else on this website possible. Not overnight - it took six to nine months before the energy stopped feeling like a good day and started feeling like my baseline.',
  },
  {
    rank: '02',
    title: 'Moving to California After College',
    body:
      'Leaving what I knew for the place where the things I cared about were actually happening. It put me in rooms I never would have found otherwise, and it is where the rest of this story takes place.',
    link: { to: '/about', label: 'More about me' },
  },
  {
    rank: '03',
    title: 'Choosing AI as a Career',
    body:
      'I bet my career on AI before it was obvious, and I have spent every year since deploying each new generation of it in production - and teaching it to the next generation of engineers.',
    link: { to: '/teaching', label: 'See the teaching' },
  },
];
