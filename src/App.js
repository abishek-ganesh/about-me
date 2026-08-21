import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import LoadingSpinner from './components/common/LoadingSpinner';
import quotes from './data/kanye';
import './static/css/main.scss'; // All of our styles

// Easter egg for anyone who opens devtools. Module scope so it fires once per load.
console.log(
  `%c"${quotes.console.text}"%c\n- Ye, ${quotes.console.song}`,
  'font-style: italic; font-size: 13px;',
  'font-size: 11px; opacity: 0.7;'
);

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Voiceover = lazy(() => import('./pages/Voiceover'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Teaching = lazy(() => import('./pages/Teaching'));

const App = () => (
  <DarkModeProvider>
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner fullPage size="large" text="Loading page..." />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/voiceover" component={Voiceover} />
          <Route path="/stats" component={Stats} />
          <Route path="/teaching" component={Teaching} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </DarkModeProvider>
);

export default App;
