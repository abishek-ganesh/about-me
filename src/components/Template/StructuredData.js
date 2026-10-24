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
    jobTitle: 'VP of Technology & AI',
    worksFor: {
      '@type': 'Organization',
      name: 'Appa Health',
    },
    description: 'VP of Technology & AI at Appa Health and lead AI instructor. Years of AI in production, and a conviction that technology should help people.',
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
    name: 'Abishek Ganesh',
    alternateName: 'Abishek Ganesh Portfolio',
    url: 'https://abishekganesh.com',
    description: 'Personal site of Abishek Ganesh: VP of Technology & AI at Appa Health, AI instructor, and everything else he cares about.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://abishekganesh.com/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
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

  if (type === 'breadcrumb') {
    schemas.push(getBreadcrumbSchema());
  }

  // Add custom schema if provided
  if (customData) {
    schemas.push(customData);
  }

  // Inline children, not dangerouslySetInnerHTML: react-helmet-async drops script tags without src or text
  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
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