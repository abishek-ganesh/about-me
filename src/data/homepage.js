// Homepage data - Sections for TOC navigation and content

// Section configuration for sidebar TOC
export const homepageSections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// About section content
export const aboutContent = {
  intro: "I turn AI breakthroughs into business advantages.",
  bio: [
    "I'm a state-of-the-art AI implementation specialist with 8+ years deploying cutting-edge AI systems in production. I don't just follow AI trends—I'm usually implementing them months before they become mainstream.",
    "My expertise spans advanced RAG systems with hybrid search, multi-agent orchestration, and always being first to deploy what's next. From Fortune 500 companies to healthcare startups, I've helped organizations leverage truly state-of-the-art AI.",
    "When I'm not building AI systems, I'm teaching the next generation of AI engineers or lending my voice to creative projects.",
  ],
  highlights: [
    { value: '8+', label: 'Years Experience' },
    { value: '15+', label: 'Companies Served' },
    { value: '99.9%', label: 'Uptime Achieved' },
    { value: '20+', label: 'Students Teaching' },
  ],
};

// Featured experience (select positions for homepage)
export const featuredExperience = [
  {
    company: 'AI Consulting Practice',
    position: 'State-of-the-Art AI Implementation Specialist',
    daterange: '2024 - Present',
    description: 'Implementing cutting-edge AI: advanced RAG systems, AI agents, multi-agent orchestration. Deploying latest models first to production.',
  },
  {
    company: 'AI Bootcamp',
    position: 'Lead AI Instructor',
    daterange: 'March 2025 - Sept 2025',
    description: 'Teaching 20+ students the absolute latest in AI including RAG systems and AI agents.',
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

// Featured projects for homepage (subset of full projects)
export const featuredProjectIds = [
  'Advanced RAG System for Fortune 500',
  'Multi-Agent Customer Service Platform',
  'Next-Gen Healthcare RAG + Agents',
];
