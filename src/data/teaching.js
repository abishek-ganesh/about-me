// Teaching page data - cohort outcomes and headline survey numbers
//
// Numbers come from two end-of-cohort surveys (May 2026): an anonymous
// instructor-feedback survey (13 responses) and a named survey (15 responses).
// Quotes live in testimonials.js and follow each student's sharing permission.

export const teachingSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'outcomes', label: 'Where They Landed' },
  { id: 'voices', label: 'Student Voices' },
  { id: 'approach', label: 'How I Teach' },
];

// Headline numbers only - the quotes do the heavy lifting
export const teachingStats = [
  {
    value: '9.8/10',
    label: 'Instructor Effectiveness',
    note: 'Anonymous end-of-course survey, 13 responses',
  },
  {
    value: '15 of 15',
    label: 'Would Recommend Me',
    note: 'Every student answered "Absolutely"',
  },
  {
    value: '6 Months',
    label: 'Python to Agentic AI',
    note: 'Three hours a day, three days a week',
  },
];

// Career changes students described in their own words
export const transformationStories = [
  {
    id: 'francisco',
    name: 'Francisco',
    before: 'Delivery and forklift driver',
    after: 'Building AI, confident in tech',
    quote:
      'This bootcamp completely changed my life. I had never done anything related to this field before; my background has always been in logistics, working in warehouses as a delivery driver and a forklift driver. Discovering that I actually have a talent for this motivates me to keep learning.',
  },
  {
    id: 'jesse',
    name: 'Jesse',
    before: 'Analyst without an AI track',
    after: 'Promotion to Data Scientist / AI Engineer',
    quote:
      "I've learned a lot across the entire AI/ML landscape which highly impacts my professional development. My manager is prepared to promote me to Data Scientist or AI Engineer before the end of the year. This could have only been achieved by putting in the work over the last six months.",
  },
  {
    id: 'david',
    name: 'David',
    before: 'Software engineer, 25 years',
    after: 'Software engineer who ships ML',
    quote:
      'I have been software engineer for 25 years, and now I am software engineer who knows Python and how to build machine learning models.',
  },
];

// Teaching principles, each grounded in what students actually reported
export const teachingPrinciples = [
  {
    title: 'No question is too basic',
    body:
      'Every single student rated the classroom a perfect 10 for feeling safe to ask basic questions. That is the number I am proudest of, because nobody learns anything they are embarrassed to ask about.',
  },
  {
    title: 'Make the abstract tangible',
    body:
      'Backpropagation and gradient descent are just math, and math becomes obvious with the right analogy. Students consistently named the neural network math sessions as the moment everything clicked.',
  },
  {
    title: 'Push, do not spoon-feed',
    body:
      'I would rather walk a student through their own reasoning than hand them the answer. It is harder in week two and it is the whole game by month six.',
  },
  {
    title: 'Meet people where they are',
    body:
      'This cohort included a forklift driver, a 25-year software engineer, and an electrical engineer. Same material, different on-ramps for each of them.',
  },
];
