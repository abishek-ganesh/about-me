import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Use GA4 Analytics instead of the old Universal Analytics
import Analytics from '../components/Template/AnalyticsGA4';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import MobileNav from '../components/Template/MobileNav';
import ScrollToTop from '../components/Template/ScrollToTop';
import StructuredData from '../components/Template/StructuredData';
import DarkModeToggle from '../components/Template/DarkModeToggle';
import CursorGlow from '../components/common/CursorGlow';

const Main = (props) => {
  const pageTitle = props.title ? `${props.title} | Abishek Ganesh` : 'Abishek Ganesh - AI Implementation Specialist';
  const siteUrl = 'https://abishekganesh.com';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;
  const imageUrl = props.image || `${siteUrl}/images/og-image.jpg`;
  
  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <StructuredData type={props.structuredDataType} customData={props.structuredData} />
      <Helmet titleTemplate="%s | Abishek Ganesh" defaultTitle="Abishek Ganesh" defer={false}>
        {props.title && <title>{props.title}</title>}
        
        {/* Primary Meta Tags */}
        <meta name="title" content={pageTitle} />
        <meta name="description" content={props.description} />
        <meta name="keywords" content="AI Implementation, RAG Systems, AI Agents, Machine Learning, GPT-5, Claude 4.1 Opus, LangChain, AI Consulting, Abishek Ganesh" />
        <meta name="author" content="Abishek Ganesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Abishek Ganesh" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="twitter:creator" content="@abishekganesh" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#2196f3" />
      </Helmet>
      <div id="wrapper">
        <CursorGlow />
        <Navigation />
        <div id="main">
          {props.children}
        </div>
        {props.fullPage ? null : <SideBar sections={props.sidebarSections} />}
        <MobileNav />
      </div>
      <DarkModeToggle floating />
    </HelmetProvider>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  structuredDataType: PropTypes.string,
  structuredData: PropTypes.object,
  sidebarSections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "State-of-the-Art AI Implementation Specialist | RAG Systems, AI Agents, and Cutting-Edge Model Deployment",
  image: null,
  structuredDataType: 'default',
  structuredData: null,
  sidebarSections: [],
};

export default Main;
