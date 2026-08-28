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
    note: 'Anonymous end-of-course survey',
  },
  {
    value: '100%',
    label: 'Would Recommend Me',
    note: 'All of them said yes',
  },
  {
    value: '9.4/10',
    label: 'Confidence After',
    note: 'How ready they feel to keep going on their own',
  },
  {
    value: '6 Months',
    label: 'Python to Agentic AI',
    note: 'Three hours a day, three days a week',
  },
];

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
    'Almost nobody walks in with an AI background. Most have never written a line of code, and their experience with AI does not go much past using ChatGPT. They arrive as delivery drivers, forklift operators, analysts, product designers, electrical engineers, and career software engineers who have never touched Python. Six months later they are building state-of-the-art machine learning and AI models and shipping them inside real applications that anyone in the world can use. That is the whole point. These skills are big enough to upskill someone in the role they already have, move them into a new one, or let them go build their own thing.',
};

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
    id: 'david-f',
    name: 'David F.',
    before: 'Software engineer, 25 years',
    after: 'Software engineer who ships ML',
    quote:
      'I have been software engineer for 25 years, and now I am software engineer who knows Python and how to build machine learning models.',
  },
  {
    id: 'wesley',
    name: 'Wesley',
    before: 'Electrical engineer who only used ChatGPT',
    after: 'Understands the math under the models',
    quote:
      'I just knew how to use chatgpt about just as well as I did google. Now after completing this course I feel like I have taken the veil of secrecy off of the monster that is AI. At the end of the day it is all just math under the hood.',
  },
  {
    id: 'own-company',
    name: 'Anonymous',
    before: 'Unsure of their own AI knowledge',
    after: 'Building their own company',
    quote:
      'I was iffy about my knowledge of AI and I have now gained the confidence in building my own company.',
  },
  {
    id: 'doug',
    name: 'Doug',
    before: 'Curious about AI, no path into it',
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
    'I build every lesson from scratch. No vendor slides, no reading off someone else’s deck. The rule I hold myself to is that nothing gets hand-waved: if I put a symbol on a screen, I can derive it, and so can the room by the end of the hour.',
  pillars: [
    {
      title: 'An analogy before the notation',
      body:
        'Gradient descent is a hiker coming down a mountain in thick fog. You cannot see the path, so you feel which way the ground slopes, take one small step, and repeat. Gradient is the direction, learning rate is your step size, and a local minimum is the valley you can get stuck in. Backpropagation is the blame game on a group project that turned in the wrong answer: which teammate contributed most to the mistake, and how much should each one change? I keep a running library of these so the same mental model can be called back weeks later.',
    },
    {
      title: 'The math, all the way down',
      body:
        'The backpropagation session goes forward pass, loss, chain rule, weight update, then the full optimization landscape: learning rate, batch size, epochs, depth, width, dropout, early stopping, and when to reach for which optimizer. Students see why the update rule looks the way it does, not just that it exists.',
    },
    {
      title: 'A transformer computed by hand',
      body:
        'To show how next-token prediction actually works, I built a decoder-only transformer and ran it entirely by hand in NumPy: "the tall crane flew ___" all the way to the prediction "south". Token embeddings, positional encoding, two layers of masked multi-head attention, causal masking, residuals and layer norm, the feed-forward network, unembedding, and softmax, every matrix printed with real numbers. The whole model is 416 parameters, shown next to GPT-3\'s 175 billion so the scale lands. It ends on temperature, top-k, and top-p, so the creativity dials stop being magic.',
    },
    {
      title: 'Rooms that talk back',
      body:
        'Nearly every deck has structured breakout prompts written into it, and they are open questions rather than recall drills: walk through a forward pass in your own words, or what would happen without activation functions. Everyone comes back owing the room one insight. Three hours is a long time to be lectured at, so I try not to.',
    },
  ],
};

// The final group capstone - how it is actually structured
export const capstone = {
  intro:
    'I do not end the course with a quiz. I end it with seven weeks of real client work. Teams of four stop being students and become AI consulting firms, each hired to solve a defined business problem against a real dataset and a hard deadline. Building AI is almost never a solo sport, so the last thing I teach is how to deliver it alongside other people.',
  briefsNote: 'Two examples from a recent cohort',
  briefs: [
    {
      title: 'Healthcare Analytics Platform',
      body:
        'A hospital hires the team to build a clinical decision support tool: assess patient readmission risk from clinical data, classify retinal scans as healthy or diseased, and analyze patient feedback with NLP.',
    },
    {
      title: 'Smart City / Transportation Platform',
      body:
        'A city government hires the team to build an urban operations dashboard: predict traffic accident severity from real accident data, detect potholes from road imagery, and classify citizen complaints with NLP.',
    },
  ],
  requirements: [
    {
      title: 'A deployed product, not a notebook',
      body:
        'Five working models integrated into a web application that is hosted and publicly reachable. If the world cannot open it and use it, it does not count.',
    },
    {
      title: 'Graded on data they have never seen',
      body:
        'I hold back a private test set and run their models against it. Robust validation and no data leakage stop being lecture topics and start being the grade.',
    },
    {
      title: 'Weekly agile sprint reviews',
      body:
        'Every team walks me through progress each week. Blockers surface early, contribution stays honest, and course corrections happen while they still matter.',
    },
    {
      title: 'A 45 to 60 minute executive presentation',
      body:
        'A live demo, a business case, and open Q&A where they defend technical and strategic decisions. Half the grade lives outside the model code.',
    },
  ],
  closing:
    'The teams compete. The one that delivers the strongest overall solution, technical work and presentation and business impact together, wins the client contract. That is how the real world works, and it is a far better final exam than anything I could write.',
};

// Self-reported readiness at graduation
export const readiness = {
  note: 'Graduates reporting they feel ready, end-of-course survey',
  items: [
    { label: 'Read and understand AI/ML papers', value: 93 },
    { label: 'Build AI projects independently', value: 87 },
    { label: 'Use AI APIs to build their own tools', value: 80 },
    { label: 'Keep learning advanced topics on their own', value: 80 },
    { label: 'Apply for AI/ML positions', value: 73 },
    { label: 'Integrate AI into their current role', value: 73 },
    { label: "Identify when AI is (and isn't) the right tool", value: 73 },
  ],
};

// Careers, impact, and ethics. Drawn from the course career-paths research doc
// and the final unit, which closes on responsible AI rather than on a model.
export const beyond = {
  intro:
    'Knowing how to build a model is half of it. The other half is knowing what it is worth, where it can take you, and when you should refuse to ship it. I teach all three, and I try to be straight with people about each.',
  cards: [
    {
      title: 'A career map, not a job board',
      body:
        'I keep a researched guide to where graduates actually land, built on current market data rather than vibes. Entry-level roles are tiered by how reachable they really are, each with genuine salary bands and the reason it is accessible, from data annotation and junior analyst work up through AI research assistant, security and risk analyst, governance and compliance, and MLOps. Then it branches by who you already are: the spreadsheet person, the creative who wants to build products, the person with deep domain expertise in healthcare or finance, and the one who wants to go straight down into engineering.',
    },
    {
      title: 'The honest market picture',
      body:
        'The same guide carries the bad news, on purpose. A third of roles advertised as entry level still ask for prior experience. The entry-level market overall has contracted. Applications per opening are climbing. Some bootcamp placement statistics are inflated by quietly excluding people. I would rather my students walk out with an accurate map than a flattering one, because the accurate one is the one that works.',
    },
    {
      title: 'A trajectory, not a finish line',
      body:
        'The last session lays out a realistic 24-month arc: polish the capstone and get projects public, land the first AI or AI-adjacent role, ship something visible and pick a vertical, become the person your team asks, then move into senior or specialist work. Paired with the habits that actually compound, which are building in public, networking as a builder rather than a job seeker, and treating continuous learning as the job itself.',
    },
    {
      title: 'Ethics is not the last lecture',
      body:
        'Bias and fairness show up where they naturally live: bias in language models during NLP, representation and consent when we hit generative image and video models, confidence bias in RAG, privacy and bias amplification when we run open-source models locally. By the final unit it is guardrails, hallucination mitigation, transparency, the EU AI Act risk pyramid, and the global regulatory picture. It is threaded through rather than bolted on at the end.',
    },
    {
      title: 'When not to build it',
      body:
        'There is a slide I care about more than most, and it is a list of times the right answer is to not ship the AI. Life-or-death calls with no human in the loop. Legal judgments like sentencing, parole, and custody. Systems where errors compound with no rollback. Datasets too small or too biased to trust. Anything you cannot explain to the person it affects. And the plain case of a deterministic system that already works, because you should not AI-ify a calculator. The line I leave them with is that "we could build it" is not "we should build it".',
    },
    {
      title: 'Why it matters at all',
      body:
        'We ground it in things that have actually happened: loans denied by biased credit scoring, resumes filtered out by hiring models trained on skewed data, misdiagnoses from a hallucinating chatbot, false arrests from facial recognition. All real, all preventable. Most people will only ever use AI and wonder how it works, or be afraid of it. My students build it, and that puts them in a very small group who get to shape what it becomes. I want them to feel the weight of that, not just the opportunity.',
    },
  ],
};

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
      'Backpropagation and gradient descent are just math, and math becomes obvious with the right analogy. Making abstract concepts tangible through analogies is the other question that came back a unanimous 10 out of 10.',
  },
  {
    title: 'Build to the moment it clicks',
    body:
      'Half of all students named neural networks and deep learning as the week everything fell into place. The curriculum is sequenced to get them to that moment and then keep going well past it.',
  },
  {
    title: 'Push, do not spoon-feed',
    body:
      'I would rather walk a student through their own reasoning than hand them the answer. It is harder in week two and it is the whole game by month six.',
  },
  {
    title: 'Meet people where they are',
    body:
      'One room held a teacher, a salesperson, someone recently retired, and so many other backgrounds. Same material, different on-ramps for each of them.',
  },
];
