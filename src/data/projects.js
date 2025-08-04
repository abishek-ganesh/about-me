// AI Projects - Real-world implementations with measurable impact
const data = [
  {
    title: 'Real-time ML Infrastructure Platform',
    subtitle: 'Scalable architecture serving millions of predictions daily',
    category: 'ML Infrastructure',
    image: '/images/projects/ml-infrastructure.jpg',
    date: '2024-01-15',
    featured: true,
    desc: 'Designed and implemented a real-time ML platform that reduced system MTTR by 60% through strategic debugging and architectural improvements.',
    
    challenge: 'Legacy ML systems were experiencing frequent failures with mean time to recovery exceeding 4 hours, impacting business operations and customer experience.',
    
    solution: [
      'Architected microservices-based ML pipeline using Python and TypeScript',
      'Implemented comprehensive monitoring and alerting with AWS CloudWatch',
      'Built automated rollback mechanisms for model deployments',
      'Created standardized debugging workflows and documentation'
    ],
    
    techStack: ['Python', 'TypeScript', 'PyTorch', 'AWS', 'Docker', 'Kubernetes', 'Redis'],
    
    impact: {
      'MTTR Reduction': '60% improvement',
      'System Uptime': '99.9% availability',
      'Response Time': 'Sub-100ms latency',
      'Scale': '1M+ predictions/day'
    },
    
    learnings: [
      'Importance of comprehensive monitoring in ML systems',
      'Value of automated recovery mechanisms',
      'Technical debt reduction as a continuous process'
    ]
  },
  
  {
    title: 'Healthcare AI Assistant',
    subtitle: 'Mental health support system using advanced NLP',
    category: 'Healthcare AI',
    image: '/images/projects/healthcare-ai.jpg',
    date: '2023-09-20',
    featured: true,
    desc: 'Led development of an AI-powered mental health assistant that provides personalized support and connects users with appropriate resources.',
    
    challenge: 'Mental health services are often inaccessible or unaffordable, leaving many without proper support. Traditional chatbots lack the nuance needed for sensitive conversations.',
    
    solution: [
      'Fine-tuned LLMs for empathetic and contextual responses',
      'Implemented RAG system for evidence-based recommendations',
      'Built safety mechanisms to detect crisis situations',
      'Integrated with professional healthcare provider networks'
    ],
    
    techStack: ['Python', 'LangChain', 'HuggingFace', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    
    impact: {
      'User Engagement': '85% satisfaction rate',
      'Response Accuracy': '92% clinical accuracy',
      'Availability': '24/7 support coverage',
      'Reach': '10K+ users supported'
    },
    
    learnings: [
      'Ethical considerations in healthcare AI development',
      'Importance of human oversight in sensitive applications',
      'Balancing automation with professional intervention'
    ]
  },
  
  {
    title: 'AI-Powered Document Intelligence',
    subtitle: 'OCR and NLP system for automated document processing',
    category: 'Document AI',
    image: '/images/projects/document-ai.jpg',
    date: '2023-06-10',
    featured: true,
    desc: 'Built an intelligent document processing system that extracts, validates, and categorizes information from various document types with high accuracy.',
    
    challenge: 'Manual document processing was consuming 70% of operational staff time, with error rates exceeding 15% on complex documents.',
    
    solution: [
      'Developed custom OCR pipeline with pre-processing optimizations',
      'Implemented multi-model ensemble for text extraction and validation',
      'Created intelligent routing system based on document classification',
      'Built human-in-the-loop interface for edge cases'
    ],
    
    techStack: ['Python', 'PyTorch', 'OpenCV', 'Tesseract', 'AWS Textract', 'LangChain'],
    
    impact: {
      'Time Savings': '70% reduction in processing',
      'Accuracy': '98.5% extraction accuracy',
      'Document Types': '50+ formats supported',
      'Cost Reduction': '$500K annual savings'
    },
    
    learnings: [
      'Importance of robust pre-processing in OCR systems',
      'Value of ensemble approaches for accuracy',
      'Human-in-the-loop design for production systems'
    ]
  },
  
  {
    title: 'AI Bootcamp Platform',
    subtitle: 'Comprehensive educational platform for AI/ML learning',
    category: 'Education Technology',
    image: '/images/projects/ai-bootcamp.jpg',
    date: '2024-03-01',
    featured: false,
    desc: 'Created and launched an AI bootcamp platform serving 20+ students with interactive lessons, hands-on projects, and real-world applications.',
    
    challenge: 'Traditional AI education lacks practical application and personalized learning paths, leaving students unprepared for real-world implementation.',
    
    solution: [
      'Designed comprehensive curriculum covering 7 major AI/ML topics',
      'Built interactive coding environment with real-time feedback',
      'Created project-based learning modules with industry relevance',
      'Implemented progress tracking and personalized recommendations'
    ],
    
    techStack: ['Python', 'Jupyter', 'React', 'Node.js', 'MongoDB', 'Docker'],
    
    impact: {
      'Student Success': '90% completion rate',
      'Skill Development': '7 core competencies',
      'Project Portfolio': '5+ projects per student',
      'Career Outcomes': '80% job placement'
    },
    
    learnings: [
      'Importance of hands-on learning in technical education',
      'Value of recorded sessions for review and accessibility',
      'Community building as key to student success'
    ]
  }
];

export default data;