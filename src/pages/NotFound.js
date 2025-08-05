import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { get404Photo } from '../data/photos';

const PageNotFound = () => {
  const rockPhoto = get404Photo();
  
  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet title="404 Not Found">
          <meta name="description" content="The content you are looking for cannot be found." />
        </Helmet>
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <h1 data-testid="heading" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
            The People's Page Not Found
          </h1>
          <img 
            src={rockPhoto.path} 
            alt="The Rock parody - The People's Champion meets 404 error" 
            style={{ 
              maxWidth: '500px', 
              width: '100%', 
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem'
            }}
          />
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Can you smell what this page isn't cooking?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
            It doesn't matter what URL you typed! This page has checked into the Smackdown Hotel.
          </p>
          <Link 
            to="/" 
            className="btn btn--primary"
            style={{ 
              display: 'inline-block', 
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              textDecoration: 'none'
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;
