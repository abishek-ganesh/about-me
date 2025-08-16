// AI Projects - Real-world implementations with measurable impact
const data = [
  {
    title: 'Advanced RAG System for Fortune 500',
    subtitle: 'Hybrid search with semantic + keyword fusion at enterprise scale',
    category: 'State-of-the-Art RAG',
    image: '/images/projects/rag-system.jpg',
    date: '2024-01-15',
    featured: true,
    desc: 'Implemented cutting-edge RAG system with hybrid search, multi-stage reranking, and dynamic context optimization serving 10M+ queries monthly.',
    
    challenge: 'Traditional search systems failed to understand context and nuance, resulting in 40% of queries returning irrelevant results and poor user satisfaction.',
    
    solution: [
      'Built hybrid search combining semantic embeddings with keyword matching',
      'Implemented multi-stage reranking with cross-encoders for 95% relevance',
      'Dynamic context window optimization reducing costs by 40%',
      'Knowledge graph integration for enhanced reasoning capabilities'
    ],
    
    techStack: ['GPT-5', 'Claude 4.1 Opus', 'Pinecone', 'LangChain', 'HuggingFace', 'Python', 'FastAPI'],
    
    impact: {
      'Query Relevance': '95% accuracy',
      'Response Time': 'Sub-100ms latency',
      'Cost Reduction': '40% lower than baseline',
      'Scale': '10M+ queries/month'
    },
    
    learnings: [
      'Hybrid search outperforms pure semantic or keyword approaches',
      'Multi-stage reranking is crucial for production RAG systems',
      'Dynamic context optimization balances cost and performance'
    ]
  },
  
  {
    title: 'Multi-Agent Customer Service Platform',
    subtitle: 'Orchestrated AI agents with specialized capabilities and tool use',
    category: 'AI Agents',
    image: '/images/projects/multi-agent.jpg',
    date: '2023-09-20',
    featured: true,
    desc: 'Built sophisticated multi-agent system with autonomous agents for different tasks, implementing ReAct pattern and achieving 70% reduction in human escalations.',
    
    challenge: 'Customer service teams overwhelmed with repetitive queries while complex issues required multiple handoffs, resulting in poor customer experience and high operational costs.',
    
    solution: [
      'Orchestrated specialized agents for different query types',
      'Implemented tool use for real-time data access and actions',
      'Built ReAct pattern for complex reasoning and decision-making',
      'Created seamless handoff mechanism between agents and humans'
    ],
    
    techStack: ['Claude 4.1 Opus', 'GPT-5', 'LangChain', 'Agents Framework', 'Python', 'Redis', 'Kubernetes'],
    
    impact: {
      'Human Escalations': '70% reduction',
      'Resolution Time': '5x faster',
      'Customer Satisfaction': '92% CSAT',
      'Cost Savings': '$2M annually'
    },
    
    learnings: [
      'Agent specialization dramatically improves performance',
      'Tool use is essential for real-world agent deployments',
      'Human-in-the-loop design ensures safety and quality'
    ]
  },
  
  {
    title: 'Enterprise AI Agent Framework',
    subtitle: 'Custom platform for building and deploying AI agents at scale',
    category: 'Agent Infrastructure',
    image: '/images/projects/agent-framework.jpg',
    date: '2023-06-10',
    featured: true,
    desc: 'Created enterprise-grade agent development platform supporting single and multi-agent workflows with built-in observability, deployed across 5 industries.',
    
    challenge: 'Companies struggled to build reliable AI agents due to lack of standardization, poor debugging tools, and difficulty scaling from prototype to production.',
    
    solution: [
      'Built modular agent framework with plug-and-play components',
      'Implemented Chain-of-Thought and Tree-of-Thought reasoning',
      'Created comprehensive observability and debugging tools',
      'Developed industry-specific agent templates and patterns'
    ],
    
    techStack: ['Llama 3.1', 'Claude 4.1 Opus', 'LangGraph', 'Python', 'FastAPI', 'Temporal', 'Grafana'],
    
    impact: {
      'Development Speed': '10x faster deployment',
      'Industries Served': '5 different sectors',
      'Agent Reliability': '99.5% success rate',
      'Cost Efficiency': '80% lower than custom'
    },
    
    learnings: [
      'Standardization is key to scaling AI agent deployments',
      'Observability is crucial for production agent systems',
      'Industry-specific patterns accelerate adoption'
    ]
  },
  
  {
    title: 'Medical Nutrition Therapy App',
    subtitle: 'Remote healthcare solution developed during COVID-19',
    category: 'Healthcare Innovation',
    image: '/images/projects/mnt-app.jpg',
    date: '2020-11-20',
    featured: true,
    desc: 'Developed a comprehensive mHealth application enabling remote Medical Nutrition Therapy during COVID-19, addressing critical healthcare accessibility needs.',
    
    challenge: 'COVID-19 pandemic created urgent need for remote healthcare delivery, particularly for nutrition therapy patients who could not attend in-person consultations.',
    
    solution: [
      'Built cross-platform mobile app using React Native',
      'Implemented secure patient-provider communication with Firebase',
      'Created comprehensive nutrition tracking and meal planning features',
      'Developed real-time video consultation capabilities',
      'Integrated evidence-based dietary recommendations engine'
    ],
    
    techStack: ['React Native', 'Firebase', 'Node.js', 'Express', 'PostgreSQL', 'Twilio Video'],
    
    impact: {
      'User Adoption': '5K+ downloads',
      'Session Duration': '45 min average',
      'Health Outcomes': '78% improved metrics',
      'Provider Efficiency': '3x more patients served'
    },
    
    learnings: [
      'Critical importance of healthcare accessibility during crises',
      'Privacy and security considerations in health apps',
      'User experience design for diverse age groups',
      'Integration of clinical protocols in digital platforms'
    ]
  },

  {
    title: 'Next-Gen Healthcare RAG + Agents',
    subtitle: 'First-of-its-kind medical knowledge system with agentic reasoning',
    category: 'Cutting-Edge Healthcare AI',
    image: '/images/projects/healthcare-rag.jpg',
    date: '2024-03-15',
    featured: true,
    desc: 'Pioneered combination of advanced RAG with AI agents for medical knowledge retrieval, implementing constitutional AI for safety and achieving regulatory compliance.',
    
    challenge: 'Healthcare providers needed instant access to vast medical knowledge while ensuring accuracy, safety, and compliance - traditional search systems were inadequate.',
    
    solution: [
      'Built hybrid RAG system with medical knowledge graphs',
      'Implemented multi-agent verification for critical decisions',
      'Applied constitutional AI for safety and ethics',
      'Created audit trail for regulatory compliance',
      'Integrated with latest medical research databases'
    ],
    
    techStack: ['GPT-5', 'Med-PaLM 2', 'BioBERT', 'FAISS', 'Neo4j', 'Constitutional AI', 'FHIR'],
    
    impact: {
      'Clinical Accuracy': '97% verified correct',
      'Decision Speed': '30x faster lookup',
      'Safety Score': '99.9% safe responses',
      'Provider Adoption': '500+ daily users'
    },
    
    learnings: [
      'RAG + Agents is powerful combination for complex domains',
      'Constitutional AI essential for healthcare applications',
      'Multi-agent verification improves safety and accuracy',
      'First-mover advantage in regulated industries'
    ]
  },

  {
    title: 'Sales Team Mobile App',
    subtitle: 'Conference networking tool for sales professionals',
    category: 'Business Technology',
    image: '/images/projects/sales-app.jpg',
    date: '2017-03-15',
    featured: false,
    desc: 'Built a mobile app for sales teams to quickly identify and connect with key contacts at conferences, significantly improving networking efficiency.',
    
    challenge: 'Sales teams at conferences struggled to identify and prioritize high-value contacts among thousands of attendees, missing critical opportunities.',
    
    solution: [
      'Developed native mobile app with offline capabilities',
      'Integrated with CRM for real-time contact scoring',
      'Built intelligent matching algorithm for prospect prioritization',
      'Created quick-capture features for lead information',
      'Implemented follow-up reminder system'
    ],
    
    techStack: ['React Native', 'Salesforce API', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    
    impact: {
      'Lead Capture': '3x increase',
      'Follow-up Rate': '85% within 24hrs',
      'Deal Velocity': '40% faster close',
      'ROI': '250% conference ROI'
    },
    
    learnings: [
      'Importance of offline functionality in mobile apps',
      'Value of CRM integration for sales tools',
      'User experience design for high-pressure environments',
      'Data synchronization challenges and solutions'
    ]
  },

  {
    title: 'Real-time Financial AI Agents',
    subtitle: 'Agentic workflow for trade analysis and compliance',
    category: 'FinTech AI',
    image: '/images/projects/fintech-agents.jpg',
    date: '2024-03-01',
    featured: false,
    desc: 'Deployed autonomous AI agents for real-time financial analysis, combining advanced RAG for regulatory compliance with sub-50ms decision making.',
    
    challenge: 'Financial institutions needed real-time analysis of market conditions while ensuring strict regulatory compliance, requiring both speed and accuracy.',
    
    solution: [
      'Built agentic workflow for parallel trade analysis',
      'Implemented RAG system for real-time regulatory checks',
      'Created multi-agent verification for high-value decisions',
      'Deployed with sub-50ms latency requirements'
    ],
    
    techStack: ['GPT-5', 'Gemini Pro', 'Redis', 'Kafka', 'Python', 'Rust'],
    
    impact: {
      'Decision Speed': 'Sub-50ms latency',
      'Daily Volume': '$2B+ transactions',
      'Compliance Rate': '100% adherence',
      'False Positives': '85% reduction'
    },
    
    learnings: [
      'Speed and accuracy both critical in financial AI',
      'Agent architectures excel at parallel processing',
      'RAG essential for dynamic regulatory compliance'
    ]
  }
];

export default data;