// Resume data - Abishek Ganesh

// Education data
export const degrees = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science',
    link: 'https://www.gatech.edu/',
    year: '2019-2021',
    gpa: '4.0',
    details: 'Specialization in Machine Learning and Artificial Intelligence',
  },
  {
    school: 'The Ohio State University',
    degree: 'B.S. Mathematics',
    link: 'https://www.osu.edu/',
    year: '2009-2013',
    details: 'Focus on Applied Mathematics and Computer Science',
  },
  {
    school: 'De Anza College',
    degree: 'A.A. Marketing Management',
    link: 'https://www.deanza.edu/',
    year: '2015-2016',
    gpa: '3.9',
    details: 'Business and Project Management focus',
  },
];

// Work experience data
export const positions = [
  {
    company: 'AI Consulting Practice',
    position: 'State-of-the-Art AI Implementation Specialist',
    link: '',
    daterange: '2024 - Present',
    points: [
      'Implement cutting-edge AI: advanced RAG systems, AI agents, multi-agent orchestration',
      'Deploy latest models (GPT-4o, Claude 3.5, Gemini Pro) - always first to production',
      'Reduced system MTTR by 60% through strategic AI architecture and debugging',
      'Help Fortune 500 companies leverage truly state-of-the-art AI (not just buzzwords)',
    ],
  },
  {
    company: 'AI Bootcamp',
    position: 'Lead AI Instructor',
    link: '',
    daterange: 'March 2025 - September 2025',
    points: [
      'Teaching 20+ students the absolute latest in AI - including RAG systems and AI agents',
      'Philosophy: teach what\'s actually being used in production today and prepare for tomorrow',
      'Covering Python fundamentals through state-of-the-art generative AI implementations',
      'Creating next generation of AI engineers who understand cutting-edge technologies',
    ],
  },
  {
    company: 'Limbik',
    position: 'Senior Lead Data Scientist',
    link: 'https://www.limbik.com/',
    daterange: '2023 - 2024',
    points: [
      'Led team implementing cutting-edge AI for mental health applications',
      'Built production RAG system for clinical knowledge retrieval',
      'Deployed state-of-the-art NLP models for patient interaction analysis',
      'Achieved 99.9% uptime on real-time ML systems serving healthcare providers',
    ],
  },
  {
    company: 'Amazon Web Services',
    position: 'Software Development Engineer',
    link: 'https://aws.amazon.com/chime/chime-sdk/',
    daterange: '2022 - 2023',
    points: [
      'Worked on AWS Chime SDK development',
      'Built scalable communication infrastructure',
      'Implemented real-time video/audio processing features',
      'Collaborated with cross-functional teams on cloud services',
    ],
  },
  {
    company: 'mpathic',
    position: 'Senior Machine Learning Engineer',
    link: 'https://www.mpathic.ai/',
    daterange: '2022',
    points: [
      'Implemented advanced RAG systems for medical data analysis - first in healthcare',
      'Built multi-modal AI processing clinical text and medical imaging',
      'Achieved sub-100ms latency on production inference systems',
      'Pioneered use of transformer models for clinical decision support',
    ],
  },
  {
    company: 'Big Health',
    position: 'Data Science & Commercial Operations Lead',
    link: 'https://bighealth.com',
    daterange: '2017 - 2021',
    points: [
      'Led data science initiatives for digital therapeutics platform',
      'Built predictive models for user engagement and outcomes',
      'Managed commercial operations and analytics infrastructure',
      'Scaled data operations from startup to series B funding',
    ],
  },
];

// Skills data organized by category
export const skillCategories = {
  'RAG Systems Mastery': [
    { name: 'Hybrid Search (Semantic + Keyword)', level: 5 },
    { name: 'Multi-stage Reranking', level: 5 },
    { name: 'Dynamic Context Optimization', level: 5 },
    { name: 'Knowledge Graph Integration', level: 5 },
    { name: 'Production RAG at Scale', level: 5 },
  ],
  'AI Agent Development': [
    { name: 'Autonomous Agents', level: 5 },
    { name: 'Multi-Agent Orchestration', level: 5 },
    { name: 'ReAct Pattern', level: 5 },
    { name: 'Chain-of-Thought', level: 5 },
    { name: 'Tool Use & Function Calling', level: 5 },
  ],
  'Latest Models Deployed': [
    { name: 'GPT-4o', level: 5 },
    { name: 'Claude 3.5', level: 5 },
    { name: 'Gemini Pro', level: 5 },
    { name: 'Llama 3.1', level: 5 },
    { name: 'Whatever Comes Next', level: 5 },
  ],
  'Advanced Techniques': [
    { name: 'Fine-tuning', level: 5 },
    { name: 'RLHF', level: 4 },
    { name: 'Constitutional AI', level: 4 },
    { name: 'Multi-modal AI', level: 5 },
    { name: 'Prompt Engineering', level: 5 },
  ],
  'Production Excellence': [
    { name: 'Sub-100ms Latency', level: 5 },
    { name: 'Auto-scaling Infrastructure', level: 5 },
    { name: 'Fault Tolerance', level: 5 },
    { name: 'Observability & Monitoring', level: 5 },
    { name: '99.9% Uptime Achievement', level: 5 },
  ],
  'Core Technologies': [
    { name: 'Python', level: 5 },
    { name: 'PyTorch', level: 5 },
    { name: 'HuggingFace', level: 5 },
    { name: 'LangChain', level: 5 },
    { name: 'AWS', level: 5 },
  ],
};

// Convert to flat array for compatibility
export const skills = Object.entries(skillCategories).flatMap(([category, skills]) =>
  skills.map(skill => ({
    title: skill.name,
    competency: skill.level,
    category: [category],
  }))
);

// Categories for the skills chart
export const categories = Object.keys(skillCategories).map((cat, index) => ({
  name: cat,
  color: [
    '#2196f3', // Languages - Blue
    '#4caf50', // AI/ML - Green
    '#ff9800', // Specializations - Orange
    '#9c27b0', // Cloud - Purple
    '#f44336', // Data Science - Red
    '#00bcd4', // ML Algorithms - Cyan
  ][index % 6],
}));

// Selected courses that demonstrate expertise
export const courses = [
  {
    title: 'Machine Learning',
    number: 'CS 7641',
    link: 'https://omscs.gatech.edu/cs-7641-machine-learning',
    university: 'Georgia Tech',
  },
  {
    title: 'Deep Learning',
    number: 'CS 7643',
    link: 'https://omscs.gatech.edu/cs-7643-deep-learning',
    university: 'Georgia Tech',
  },
  {
    title: 'Artificial Intelligence',
    number: 'CS 6601',
    link: 'https://omscs.gatech.edu/cs-6601-artificial-intelligence',
    university: 'Georgia Tech',
  },
  {
    title: 'Knowledge-Based AI',
    number: 'CS 7637',
    link: 'https://omscs.gatech.edu/cs-7637-knowledge-based-artificial-intelligence-cognitive-systems',
    university: 'Georgia Tech',
  },
  {
    title: 'Machine Learning for Trading',
    number: 'CS 7646',
    link: 'https://omscs.gatech.edu/cs-7646-machine-learning-trading',
    university: 'Georgia Tech',
  },
  {
    title: 'AI for Robotics',
    number: 'CS 7638',
    link: 'https://omscs.gatech.edu/cs-7638-artificial-intelligence-robotics',
    university: 'Georgia Tech',
  },
];