// Homepage data - Sections for TOC navigation and content

// Section configuration for sidebar TOC
export const homepageSections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'contact', label: 'Contact' },
];

// About section content
export const aboutContent = {
  intro: "I turn AI breakthroughs into business advantages.",
  bio: [
    "I've been deploying AI in production since 2019 - from classical machine learning and deep learning, through the transformer revolution, to today's LLMs and agentic systems. I don't specialize in just one paradigm; I deploy whatever fits the problem.",
    "Across Fortune 500 enterprises, healthcare startups, nonprofits, and local government, I've helped 15+ organizations ship AI that actually works. I'm always first to production with emerging technologies.",
    "When I'm not building AI systems, I'm teaching the next generation of AI engineers, lending my voice to creative projects, or chasing a dream of becoming the vegan Anthony Bourdain.",
  ],
  highlights: [
    { value: 'Since 2019', label: 'In Production AI' },
    { value: '15+', label: 'Organizations Served' },
    { value: '99.9%', label: 'Uptime Achieved' },
    { value: '20+', label: 'Students Teaching' },
  ],
};

// Featured experience (select positions for homepage)
export const featuredExperience = [
  {
    company: 'Appa Health',
    position: 'VP of Technology & AI',
    daterange: '2024 - Present',
    description: 'Leading technology and AI for a mentorship platform supporting dozens of mentors and hundreds of students.',
  },
  {
    company: 'AI Consulting Practice',
    position: 'AI Implementation Specialist',
    daterange: '2024 - Present',
    description: 'Full-spectrum AI deployment: ML, deep learning, RAG, and agentic systems. Serving startups, enterprises, nonprofits, and government.',
  },
  {
    company: 'AI Bootcamp',
    position: 'Lead AI Instructor',
    daterange: 'March 2025 - Present',
    description: 'Teaching 20+ students production AI spanning ML, deep learning, LLMs, RAG, and agentic systems.',
  },
  {
    company: 'Limbik',
    position: 'Senior Lead Data Scientist',
    daterange: '2023 - 2024',
    description: 'Led team implementing cutting-edge AI for mental health applications. Built production RAG system with 99.9% uptime.',
  },
  {
    company: 'Amazon Web Services',
    position: 'Software Development Engineer',
    daterange: '2022 - 2023',
    description: 'Worked on AWS Chime SDK development. Built scalable communication infrastructure.',
  },
];
