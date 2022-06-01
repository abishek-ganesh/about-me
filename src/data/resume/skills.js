const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web/Mobile Dev', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web/Mobile Dev', 'Javascript', 'Blockchain'],
  },
  {
    title: 'Solidity',
    competency: 3,
    category: ['Languages', 'Javascript', 'Blockchain'],
  },
  {
    title: 'Salesforce/CRM',
    competency: 5,
    category: ['Databases', 'Tools', 'Languages', 'Cloud'],
  },
  {
    title: 'Excel',
    competency: 5,
    category: ['Databases', 'Tools', 'Languages'],
  },
  {
    title: 'Julia',
    competency: 1,
    category: ['Web/Mobile Dev', 'Languages', 'Data Science'],
  },
  {
    title: 'Dapps',
    competency: 2,
    category: ['Web/Mobile Dev', 'Blockchain'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web/Mobile Dev', 'Javascript'],
  },
  {
    title: 'React Native',
    competency: 3,
    category: ['Web/Mobile Dev', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web/Mobile Dev', 'Tools', 'Blockchain', 'Cloud'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web/Mobile Dev', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Web/Mobile Dev', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web/Mobile Dev', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Express.JS',
    competency: 1,
    category: ['Web/Mobile Dev', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web/Mobile Dev', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web/Mobile Dev', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 5,
    category: ['Web/Mobile Dev', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 5,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Tableau',
    competency: 5,
    category: ['Data Science', 'Databases', 'Tools'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Web/Mobile Dev', 'Cloud'],
  },
  {
    title: 'Spark',
    competency: 1,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Pylint',
    competency: 2,
    category: ['Data Engineering', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
