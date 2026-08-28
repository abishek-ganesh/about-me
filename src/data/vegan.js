// Vegan page data - the energy story, the three decisions, and the dream.
// All first-person copy lives here so the page component stays layout-only.

export const veganSections = [
  { id: 'energy', label: 'The Energy' },
  { id: 'decisions', label: 'Three Decisions' },
  { id: 'dream', label: 'The Dream' },
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
