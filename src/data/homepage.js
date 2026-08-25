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
  intro: "Technology should help people. So should the people who build it.",
  bio: [
    "I started in mathematics, detoured through a marketing degree, and came out the other side with a master's in computer science, which is a roundabout way of saying I've never been much good at staying in one lane. I've been deploying AI in production since 2019, from classical machine learning through the transformer revolution to today's LLMs and agentic systems. I don't specialize in a single paradigm. What carries over from the math is the conviction that at the end of the day it's all just math, and anything built out of math can be explained to anyone willing to sit with it.",
    "That belief is why I teach. I lead an intensive AI bootcamp and I'm VP of Technology & AI at Appa Health, where the whole point of the technology is connecting students with mentors who change their trajectory. I've shipped AI for Fortune 500 enterprises, healthcare startups, nonprofits, and local government, but the work I'm proudest of is watching someone with no technical background realize they can build a neural network.",
    "The rest of me leaks into the work more than it probably should. I'm a voice actor, so I think about pacing and delivery when I'm explaining backpropagation to a room. I'm a Ye fan, so there are lyrics tucked across this site for anyone who goes looking. And I'm vegan with 16 countries in my passport and a real dream of becoming the vegan Anthony Bourdain, telling the story of a place through the food that's already there.",
  ],
  highlights: [
    { value: 'Since 2019', label: 'In Production AI' },
    { value: 'ML to Agents', label: 'Full AI Spectrum' },
    { value: '20+', label: 'Students Per Cohort' },
    { value: 'Always First', label: "To What's Next" },
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
    description: 'Led team implementing cutting-edge AI for mental health applications. Built and shipped a production RAG system.',
  },
  {
    company: 'Amazon Web Services',
    position: 'Software Development Engineer',
    daterange: '2022 - 2023',
    description: 'Worked on AWS Chime SDK development. Built scalable communication infrastructure.',
  },
];
