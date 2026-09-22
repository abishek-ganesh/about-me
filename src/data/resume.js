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
    details: 'Focus on Financial Mathematics',
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
    company: 'Appa Health',
    position: 'VP of Technology & AI',
    link: '',
    daterange: '2024 - Present',
    points: [
      'Lead technology and AI for a mentorship platform serving hundreds of students',
      'Build and scale the product systems supporting dozens of mentors',
    ],
  },
  {
    company: 'AI Consulting Practice',
    position: 'AI Implementation Specialist',
    link: '',
    daterange: '2024 - Present',
    points: [
      'Implement RAG systems, AI agents, and multi-agent orchestration in production',
      'Deploy current foundation models to production for client teams',
      'Reduced system MTTR through AI-assisted architecture and debugging',
    ],
  },
  {
    company: 'AI Bootcamp',
    position: 'Lead AI Instructor',
    link: '',
    daterange: 'March 2025 - Present',
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
      'Built and operated real-time ML systems serving healthcare providers',
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
      'Optimized latency on production inference systems',
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
  'LLM & NLP': [
    { name: 'RAG Systems', level: 5 },
    { name: 'Mixture of Experts', level: 5 },
    { name: 'KV Cache Optimization', level: 5 },
    { name: 'Fine-tuning', level: 5 },
    { name: 'RLHF', level: 4 },
    { name: 'Prompt Engineering', level: 5 },
    { name: 'Multi-modal AI', level: 5 },
    { name: 'Hybrid Search', level: 5 },
  ],
  'Deep Learning': [
    { name: 'CNNs', level: 5 },
    { name: 'Diffusion Models', level: 5 },
    { name: 'Autoencoders', level: 5 },
    { name: 'Transformers', level: 5 },
    { name: 'Reinforcement Learning', level: 4 },
    { name: 'Unsupervised Learning', level: 5 },
    { name: 'GANs', level: 4 },
  ],
  'AI Agents & Orchestration': [
    { name: 'Autonomous Agents', level: 5 },
    { name: 'Multi-Agent Systems', level: 5 },
    { name: 'ReAct Pattern', level: 5 },
    { name: 'Chain-of-Thought', level: 5 },
    { name: 'Tool Use & Function Calling', level: 5 },
    { name: 'Knowledge Graphs', level: 5 },
  ],
  'Production Excellence': [
    { name: 'Low-Latency Inference', level: 5 },
    { name: 'Auto-scaling Infrastructure', level: 5 },
    { name: 'Fault Tolerance', level: 5 },
    { name: 'Observability & Monitoring', level: 5 },
    { name: 'High Availability', level: 5 },
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
  // Georgia Tech
  {
    title: 'Database Systems Concepts and Design',
    number: 'CS 6400',
    link: 'https://omscs.gatech.edu/cs-6400-database-systems-concepts-and-design',
    university: 'Georgia Tech',
  },
  {
    title: 'Health Informatics',
    number: 'CS 6440',
    link: 'https://omscs.gatech.edu/cs-6440-intro-health-informatics',
    university: 'Georgia Tech',
  },
  {
    title: 'Educational Technology',
    number: 'CS 6460',
    link: 'https://omscs.gatech.edu/cs-6460-educational-technology',
    university: 'Georgia Tech',
  },
  {
    title: 'Graduate Algorithms',
    number: 'CS 6515',
    link: 'https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms',
    university: 'Georgia Tech',
  },
  {
    title: 'Artificial Intelligence',
    number: 'CS 6601',
    link: 'https://omscs.gatech.edu/cs-6601-artificial-intelligence',
    university: 'Georgia Tech',
  },
  {
    title: 'AI, Ethics, and Society',
    number: 'CS 6603',
    link: 'https://omscs.gatech.edu/cs-6603-ai-ethics-and-society',
    university: 'Georgia Tech',
  },
  {
    title: 'Human Computer Interaction',
    number: 'CS 6750',
    link: 'https://omscs.gatech.edu/cs-6750-human-computer-interaction',
    university: 'Georgia Tech',
  },
  {
    title: 'Knowledge-Based AI',
    number: 'CS 7637',
    link: 'https://omscs.gatech.edu/cs-7637-knowledge-based-artificial-intelligence-cognitive-systems',
    university: 'Georgia Tech',
  },
  {
    title: 'AI for Robotics',
    number: 'CS 7638',
    link: 'https://omscs.gatech.edu/cs-7638-artificial-intelligence-robotics',
    university: 'Georgia Tech',
  },
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
    title: 'Machine Learning for Trading',
    number: 'CS 7646',
    link: 'https://omscs.gatech.edu/cs-7646-machine-learning-trading',
    university: 'Georgia Tech',
  },
  // Ohio State
  {
    title: 'Discrete Mathematics',
    number: '2366',
    link: 'https://math.osu.edu/courses/2366',
    university: 'Ohio State',
  },
  {
    title: 'Linear Algebra',
    number: '2568',
    link: 'https://math.osu.edu/courses/2568',
    university: 'Ohio State',
  },
  {
    title: 'Foundations of Higher Math',
    number: '3345',
    link: 'https://math.osu.edu/courses/3345',
    university: 'Ohio State',
  },
  {
    title: 'Financial Mathematics',
    number: '3589',
    link: 'https://math.osu.edu/courses/math-3589',
    university: 'Ohio State',
  },
  {
    title: 'Theory of Interest',
    number: '3618',
    link: 'https://math.osu.edu/courses/3618',
    university: 'Ohio State',
  },
  {
    title: 'Partial Differential Equations',
    number: '4557',
    link: 'https://math.osu.edu/courses/math-4557',
    university: 'Ohio State',
  },
  {
    title: 'Ordinary Differential Equations',
    number: '6411',
    link: 'https://math.osu.edu/courses/6411',
    university: 'Ohio State',
  },
  // De Anza
  {
    title: 'Leadership',
    number: 'BUS 65',
    link: 'https://deanza.elumenapp.com/catalog/2023-2024/bus-business-courses',
    university: 'De Anza',
  },
  {
    title: 'Principles of Marketing',
    number: 'BUS 90',
    link: 'https://deanza.elumenapp.com/catalog/2023-2024/bus-business-courses',
    university: 'De Anza',
  },
  {
    title: 'JavaScript',
    number: 'CIS 89C',
    link: 'https://deanza.elumenapp.com/catalog/2023-2024/cis-computer-information-systems-courses',
    university: 'De Anza',
  },
  {
    title: 'Project Management',
    number: 'CIS 95A',
    link: 'https://deanza.elumenapp.com/catalog/2023-2024/cis-computer-information-systems-courses',
    university: 'De Anza',
  },
  {
    title: 'Project Planning and Control',
    number: 'CIS 95B',
    link: 'https://deanza.elumenapp.com/catalog/2023-2024/cis-computer-information-systems-courses',
    university: 'De Anza',
  },
  {
    title: 'Risk Assessment and Mitigation',
    number: 'CIS 95C',
    link: 'https://deanza.elumenapp.com/catalog/2023-2024/cis-computer-information-systems-courses',
    university: 'De Anza',
  },
  {
    title: 'Managing Outsourcing',
    number: 'CIS 95D',
    link: 'https://deanza.elumenapp.com/catalog/2023-2024/cis-computer-information-systems-courses',
    university: 'De Anza',
  },
];