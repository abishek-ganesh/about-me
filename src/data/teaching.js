// Teaching page data - student outcomes and headline survey numbers
//
// Numbers come from end-of-course surveys across every cohort I have led: an
// anonymous instructor-feedback survey (25 responses) and a named survey
// (27 responses). Students are presented together as "my students"; cohort
// identity and dates are deliberately not surfaced on the page.
//
// Scales differed between surveys (some 1-5, some 1-10), so combined figures
// are computed as percent-of-max and expressed on a 10-point scale. Questions
// asked in only one survey are reported on their own sample size and never
// merged. Course-level ratings (overall experience, org support) are NOT
// combined, because an earlier cohort was co-taught for its first half.
// Quotes live in testimonials.js and follow each student's sharing permission.
// The one named course is the current one (nowTeaching); past cohorts stay
// unnamed and undated.

export const teachingSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'voices', label: 'Student Voices' },
  { id: 'outcomes', label: 'Where They Landed' },
  { id: 'craft', label: 'Inside a Lesson' },
  { id: 'capstone', label: 'The Final Build' },
  { id: 'readiness', label: 'What They Can Do' },
  { id: 'beyond', label: 'Careers & Ethics' },
  { id: 'approach', label: 'How I Teach' },
];

// Headline numbers - instructor-specific questions, asked of every student
export const teachingStats = [
  {
    value: '9.6/10',
    label: 'Instructor Effectiveness',
    // Homepage strip keeps every label on one line
    shortLabel: 'Effectiveness',
    note: 'anonymous end-of-course survey',
  },
  {
    value: '100%',
    label: 'Would Recommend Me',
    note: 'all of them said yes',
  },
  {
    value: '9.4/10',
    label: 'Confidence After',
    note: 'how ready they feel to keep going on their own',
  },
];

// The current course, folded into the page's opening card. Public facts only:
// no dates, fee, enrollment, or Fullstack curriculum.
export const nowTeaching = {
  intro:
    "I'm an applied AI engineering instructor, leading the first Applied AI Engineer Bootcamp from Columbia Engineering and Fullstack Academy..my students go from their first line of Python to shipping real AI products.",
  studentsCta: 'hear from my students',
  // Notes stay a few words so all five fit on one row
  stages: [
    { title: 'Foundations', note: 'Python through AI' },
    { title: 'Generative AI', note: 'LLMs, RAG, multimodal' },
    { title: 'Agents', note: 'multi-agent and MCP' },
    { title: 'Production', note: 'evals and guardrails' },
    { title: 'Capstone', note: 'teams win a client' },
  ],
  referenceApp: {
    heading: 'The app I build alongside them',
    body:
      'a live assistant for a fictional clinic that grows with the course: RAG first, then agents and MCP, then evals and guardrails.',
    link: { label: 'try it live', href: 'https://clinic-assistant-mocha.vercel.app' },
  },
};

// Short pull quote for the homepage teaser - the full wall lives on /teaching
export const teaserQuote = {
  text:
    'If I could successfully transition from a warehouse job to understanding AI, they can do it too.',
  name: 'Francisco',
};

// Where students start. Most have never written code outside a ChatGPT prompt.
export const startingPoint = {
  headline: '75%',
  sublabel: 'arrive as self-described beginners',
  body:
    'almost nobody walks in with an AI background. they arrive as delivery drivers, forklift operators, analysts, product designers, and software engineers who have never touched Python..six months later they are shipping AI inside real applications that anyone in the world can use.',
};

// Career changes students described in their own words
export const transformationStories = [
  {
    id: 'francisco',
    name: 'Francisco',
    before: 'delivery and forklift driver',
    after: 'Building AI, confident in tech',
    quote:
      'This bootcamp completely changed my life. I had never done anything related to this field before; my background has always been in logistics, working in warehouses as a delivery driver and a forklift driver. Discovering that I actually have a talent for this motivates me to keep learning.',
  },
  {
    id: 'jesse',
    name: 'Jesse',
    before: 'analyst without an AI track',
    after: 'Promotion to Data Scientist / AI Engineer',
    quote:
      "I've learned a lot across the entire AI/ML landscape which highly impacts my professional development. My manager is prepared to promote me to Data Scientist or AI Engineer before the end of the year. This could have only been achieved by putting in the work over the last six months.",
  },
  {
    id: 'david-f',
    name: 'David F.',
    before: 'software engineer, 25 years',
    after: 'Software engineer who ships ML',
    quote:
      'I have been software engineer for 25 years, and now I am software engineer who knows Python and how to build machine learning models.',
  },
  {
    id: 'wesley',
    name: 'Wesley',
    before: 'electrical engineer who only used ChatGPT',
    after: 'Understands the math under the models',
    quote:
      'I just knew how to use chatgpt about just as well as I did google. Now after completing this course I feel like I have taken the veil of secrecy off of the monster that is AI. At the end of the day it is all just math under the hood.',
  },
  {
    id: 'own-company',
    name: 'Anonymous',
    before: 'unsure of their own AI knowledge',
    after: 'Building their own company',
    quote:
      'I was iffy about my knowledge of AI and I have now gained the confidence in building my own company.',
  },
  {
    id: 'doug',
    name: 'Doug',
    before: 'curious about AI, no path into it',
    after: 'Back to school for AI in healthcare',
    quote:
      'This bootcamp was instrumental in my decision to go back to school and see if I can use AI in healthcare.',
  },
];

// How the lessons themselves are built. Every deck is hand-built from scratch;
// the counts behind that (deck totals, analogy library size) are deliberately
// not surfaced - they are inside-baseball for a public page.
export const craft = {
  intro:
    'i build every lesson from scratch, and nothing gets hand-waved..if I put a symbol on a screen, I can derive it, and so can the room by the end of the hour.',
  pillars: [
    {
      title: 'An analogy before the notation',
      body:
        'gradient descent is a hiker coming down a mountain in thick fog: feel which way the ground slopes, take one small step, repeat. backpropagation is the blame game on a group project that turned in the wrong answer.',
    },
    {
      title: 'The math, all the way down',
      body:
        'the backpropagation session goes forward pass, loss, chain rule, weight update..students see why the update rule looks the way it does, not just that it exists.',
    },
    {
      title: 'A transformer computed by hand',
      body:
        'i built a decoder-only transformer and ran it entirely by hand in NumPy, from "the tall crane flew ___" to the prediction "south", every matrix printed with real numbers. it has 416 parameters, shown next to GPT-3\'s 175 billion so the scale lands.',
    },
    {
      title: 'Rooms that talk back',
      body:
        'nearly every deck has breakout prompts written into it, and they are open questions rather than recall drills..three hours is a long time to be lectured at, so I try not to.',
    },
  ],
};

// The final group capstone - how it is actually structured
export const capstone = {
  intro:
    'i do not end the course with a quiz..i end it with seven weeks of real client work: teams of four become AI consulting firms, each hired to solve a business problem against a real dataset and a hard deadline.',
  briefsNote: 'two examples from a recent cohort',
  briefs: [
    {
      title: 'Healthcare Analytics Platform',
      body:
        'a hospital hires the team to assess patient readmission risk, classify retinal scans, and analyze patient feedback with NLP.',
    },
    {
      title: 'Smart City / Transportation Platform',
      body:
        'a city government hires the team to predict traffic accident severity, detect potholes from road imagery, and classify citizen complaints with NLP.',
    },
  ],
  requirementsHeading: 'What every team has to deliver',
  requirements: [
    {
      title: 'A deployed product, not a notebook',
      body:
        'five working models in a hosted, publicly reachable web application..if the world cannot open it and use it, it does not count.',
    },
    {
      title: 'Graded on data they have never seen',
      body:
        'i hold back a private test set and run their models against it..data leakage stops being a lecture topic and starts being the grade.',
    },
    {
      title: 'Weekly agile sprint reviews',
      body:
        'every team walks me through progress each week, so blockers surface while they can still be fixed.',
    },
    {
      title: 'A 45 to 60 minute executive presentation',
      body:
        'a live demo, a business case, and open Q&A. half the grade lives outside the model code.',
    },
  ],
  closing:
    'the teams compete, and the strongest overall solution wins the client contract..that is how the real world works.',
};

// Self-reported readiness at graduation
export const readiness = {
  note: 'graduates reporting they feel ready, end-of-course survey',
  items: [
    { label: 'read and understand AI/ML papers', value: 93 },
    { label: 'build AI projects independently', value: 87 },
    { label: 'use AI APIs to build their own tools', value: 80 },
    { label: 'keep learning advanced topics on their own', value: 80 },
    { label: 'apply for AI/ML positions', value: 73 },
    { label: 'integrate AI into their current role', value: 73 },
    { label: "identify when AI is (and isn't) the right tool", value: 73 },
  ],
};

// Careers, impact, and ethics. Drawn from the course career-paths research doc
// and the final unit, which closes on responsible AI rather than on a model.
export const beyond = {
  intro:
    'knowing how to build a model is half of it..the other half is knowing what it is worth, where it can take you, and when you should refuse to ship it.',
  cards: [
    {
      title: 'A career map, not a job board',
      body:
        'i keep a researched guide to where graduates actually land, tiered by how reachable each role really is.',
    },
    {
      title: 'The honest market picture',
      body:
        'the same guide carries the bad news: a third of "entry-level" roles still ask for experience, and some bootcamp placement stats are inflated.',
    },
    {
      title: 'A trajectory, not a finish line',
      body:
        'the last session lays out a realistic 24-month arc, from polishing the capstone to senior or specialist work.',
    },
    {
      title: 'Ethics is not the last lecture',
      body:
        'bias, consent, and privacy come up where they naturally live in the course, not in one lecture bolted on at the end.',
    },
    {
      title: 'When not to build it',
      body:
        'one slide lists the times the right answer is to not ship the AI. "We could build it" is not "we should build it".',
    },
    {
      title: 'Why it matters at all',
      body:
        'biased credit scoring, skewed hiring models, false arrests from facial recognition: all real, all preventable..my students build AI, so they get to shape what it becomes.',
    },
  ],
};

// Teaching principles, each grounded in what students actually reported
export const teachingPrinciples = [
  {
    title: 'Start with the news',
    body:
      'i start every class with a recent news article and a small Socratic seminar: how it applies, what it means in the greater scheme of things, and how we as new practitioners can influence things for the better.',
  },
  {
    title: 'No question is too basic',
    body:
      'every single student rated the classroom a perfect 10 for feeling safe to ask basic questions..that is the number I am proudest of.',
  },
  {
    title: 'Make the abstract tangible',
    body:
      'making abstract concepts tangible through analogies is the other question that came back a unanimous 10 out of 10.',
  },
  {
    title: 'Build to the moment it clicks',
    body:
      'half of all students named neural networks and deep learning as the week everything fell into place..the curriculum is sequenced to get them there.',
  },
  {
    title: 'Push, do not spoon-feed',
    body:
      'i would rather walk a student through their own reasoning than hand them the answer.',
  },
  {
    title: 'Meet people where they are',
    body:
      'one room held a teacher, a salesperson, and someone recently retired..same material, different on-ramps for each.',
  },
];
