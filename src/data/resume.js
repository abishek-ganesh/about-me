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
    position: 'Senior AI Engineer & Consultant',
    link: '',
    daterange: '2024 - Present',
    points: [
      'Provide expert AI/ML consulting to businesses implementing custom solutions',
      'Reduced system MTTR by 60% through strategic debugging and architecture improvements',
      'Specialize in ML infrastructure, scalable data pipelines, and AI architecture design',
      'Lead CRM management and AI systems integration projects',
    ],
  },
  {
    company: 'AI Bootcamp',
    position: 'Lead AI Instructor',
    link: '',
    daterange: 'March 2025 - September 2025',
    points: [
      'Teaching comprehensive AI curriculum to 20+ students',
      '3 hours/day, 3 days/week intensive program',
      'Covering Python fundamentals through advanced generative AI',
      'All sessions recorded and available on YouTube for student review',
    ],
  },
  {
    company: 'Limbik',
    position: 'Senior Lead Data Scientist',
    link: 'https://www.limbik.com/',
    daterange: '2023 - 2024',
    points: [
      'Led team of 5-7 engineers on complex AI projects',
      'Developed expertise in healthcare AI and mental health technology',
      'Successfully pitched AI products to investors',
      'Built real-time ML systems with scalable architectures',
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
      'Developed ML models for healthcare applications',
      'Implemented RAG systems for medical data analysis',
      'Built NLP pipelines for clinical text processing',
      'Optimized model performance for production deployment',
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
  'Languages': [
    { name: 'Python', level: 5 },
    { name: 'TypeScript', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'SQL', level: 4 },
    { name: 'HTML/CSS', level: 3 },
  ],
  'AI/ML Frameworks': [
    { name: 'PyTorch', level: 5 },
    { name: 'TensorFlow', level: 5 },
    { name: 'HuggingFace', level: 5 },
    { name: 'LangChain', level: 5 },
    { name: 'Scikit-Learn', level: 4 },
  ],
  'Specializations': [
    { name: 'RAG Systems', level: 5 },
    { name: 'OCR', level: 4 },
    { name: 'Prompt Engineering', level: 5 },
    { name: 'LLM Evaluation', level: 5 },
    { name: 'MLOps', level: 4 },
  ],
  'Cloud & Infrastructure': [
    { name: 'AWS', level: 5 },
    { name: 'Docker', level: 4 },
    { name: 'Kubernetes', level: 3 },
    { name: 'FastAPI', level: 4 },
    { name: 'PostgreSQL', level: 4 },
  ],
  'Data Science': [
    { name: 'Pandas', level: 5 },
    { name: 'NumPy', level: 5 },
    { name: 'Jupyter', level: 5 },
    { name: 'Data Visualization', level: 5 },
    { name: 'Statistical Analysis', level: 5 },
  ],
  'ML Algorithms': [
    { name: 'Neural Networks', level: 5 },
    { name: 'CNNs', level: 4 },
    { name: 'RNNs/LSTMs', level: 4 },
    { name: 'Transformers', level: 5 },
    { name: 'K-means Clustering', level: 4 },
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