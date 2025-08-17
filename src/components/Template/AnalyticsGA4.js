import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const { NODE_ENV, REACT_APP_GA4_MEASUREMENT_ID, REACT_APP_CLARITY_PROJECT_ID } = process.env;

// Initialize Google Analytics 4
if (NODE_ENV === 'production' && REACT_APP_GA4_MEASUREMENT_ID) {
  // Add Google Analytics 4 script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${REACT_APP_GA4_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', REACT_APP_GA4_MEASUREMENT_ID);
}

// Initialize Microsoft Clarity
if (NODE_ENV === 'production' && REACT_APP_CLARITY_PROJECT_ID) {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", REACT_APP_CLARITY_PROJECT_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      // Track page view in GA4
      if (window.gtag && REACT_APP_GA4_MEASUREMENT_ID) {
        window.gtag('config', REACT_APP_GA4_MEASUREMENT_ID, {
          page_path: pathname,
        });
      }

      // Clarity automatically tracks page views
    }
  }, [pathname]);

  return null;
};

export default Analytics;