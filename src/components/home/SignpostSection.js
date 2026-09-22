import React from 'react';
import TeaserCard from './TeaserCard';
import { signposts } from '../../data/homepage';

/**
 * SignpostSection - the homepage's index into the rest of the site. Each card
 * quotes the page it links to rather than describing it.
 */
const SignpostSection = () => {
  return (
    <div className="section-content">
      <h2 className="section-heading">Around the Site</h2>

      <div className="signpost-list">
        {signposts.map((s) => (
          <TeaserCard
            key={s.to}
            quote={s.quote}
            name={s.name}
            cta={s.cta}
            to={s.to}
          />
        ))}
      </div>
    </div>
  );
};

export default SignpostSection;
