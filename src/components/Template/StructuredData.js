import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const StructuredData = ({ type, customData }) => {
  // Base person/organization schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abishek Ganesh',
    alternateName: 'Abishek',
    url: 'https://abishekganesh.com',
    image: 'https://abishekganesh.com/images/august-2025/website-01.JPG',
    jobTitle: 'State-of-the-Art AI Implementation Specialist',
    worksFor: {
      '@type': 'Organization',
      name: 'AI Consulting Practice',
    },
    description: 'State-of-the-Art AI Implementation Specialist | RAG Systems, AI Agents, and Cutting-Edge Model Deployment',
    email: 'abishek.ganesh30@gmail.com',
    sameAs: [
      'https://www.linkedin.com/in/abishek-ganesh',
      'https://github.com/abishek-ganesh',
      'https://www.instagram.com/abishekganesh/',
      'https://angel.co/u/abishekganesh',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'RAG Systems',
      'AI Agents',
      'Multi-Agent Systems',
      'GPT-4',
      'Claude',
      'LangChain',
      'Python',
      'Deep Learning',
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Georgia Institute of Technology',
        url: 'https://www.gatech.edu/',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'The Ohio State University',
        url: 'https://www.osu.edu/',
      },
    ],
  };

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Abishek Ganesh - AI Implementation Specialist',
    alternateName: 'Abishek Ganesh Portfolio',
    url: 'https://abishekganesh.com',
    description: 'Portfolio website of Abishek Ganesh, State-of-the-Art AI Implementation Specialist',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://abishekganesh.com/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // Service schema for consulting
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Implementation Consulting',
    provider: personSchema,
    serviceType: 'Technology Consulting',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RAG System Implementation',
            description: 'Advanced retrieval-augmented generation systems with hybrid search and reranking',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Agent Development',
            description: 'Autonomous agents and multi-agent orchestration systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Strategy Consulting',
            description: 'Strategic guidance on implementing cutting-edge AI technologies',
          },
        },
      ],
    },
  };

  // Breadcrumb schema (dynamic based on page)
  const getBreadcrumbSchema = () => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '/';
    const segments = path.split('/').filter(Boolean);
    
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://abishekganesh.com',
      },
    ];

    segments.forEach((segment, index) => {
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      items.push({
        '@type': 'ListItem',
        position: index + 2,
        name,
        item: `https://abishekganesh.com/${segments.slice(0, index + 1).join('/')}`,
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  };

  // Select schemas based on type
  let schemas = [personSchema, websiteSchema];
  
  if (type === 'home') {
    schemas.push(serviceSchema);
  }
  
  if (type === 'breadcrumb') {
    schemas.push(getBreadcrumbSchema());
  }

  // Add custom schema if provided
  if (customData) {
    schemas.push(customData);
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
};

StructuredData.propTypes = {
  type: PropTypes.string,
  customData: PropTypes.object,
};

StructuredData.defaultProps = {
  type: 'default',
  customData: null,
};

export default StructuredData;