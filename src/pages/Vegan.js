import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Quote from '../components/common/Quote';
import AnimatedPhoto from '../components/common/AnimatedPhoto';
import {
  veganSections,
  lifeDecisions,
  pisaSequence,
  energyPhotos,
  decisionPhotos,
  dreamPhotos,
} from '../data/vegan';

const Vegan = () => (
  <Main
    title="Vegan"
    description="Abishek Ganesh - Why I'm vegan: the whole-food plant-based diet behind the energy, the three biggest decisions of my life, and the dream of a kinder world."
    sidebarSections={veganSections}
  >
    <article className="post page" id="vegan">
      <div className="page-title">
        <h1>Plant-Based for Life</h1>
        <span className="page-subtitle">
          How does he get his protein?
        </span>
      </div>

      <section id="energy" className="section-content">
        <div className="section-header">
          <h2>The Energy</h2>
        </div>
        <div className="card card--gradient">
          <div className="card-body">
            <p className="u-text-lg">
              when people see everything I juggle - the consulting, the teaching, the projects,
              this website - the question is always the same: how do you have the energy? and in
              my head I always go back to a version of me that could not do this much..the
              difference between him and me is not discipline, genetics, or NZT. it is that I
              switched to a whole-food plant-based vegan diet.
            </p>
            <p className="u-text-lg u-mb-0">
              it was tough to start off with. but once you learn the habits and find alternatives
              that make sense for you, it becomes part of your regular practice - a habit, not an
              experiment..and eventually the habit becomes a lifestyle. that is where I am today: it
              is not just about the way I feel, it is the way I think about the world and my place
              in it.
            </p>
          </div>
        </div>

        <div className="pisa-sequence u-mt-4">
          {pisaSequence.map((photo, i) => (
            <AnimatedPhoto
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              size="full"
              shape="rounded"
              animation="slideUp"
              delay={i * 150}
            />
          ))}
        </div>
        <p className="u-text-sm u-text-muted u-text-center u-mt-2">
          Pisa, Italy..my sister keeps the tower up; I supply the Bruce Lee energy.
        </p>

        <div className="journey-timeline">
          <div className="timeline-photos timeline-photos--pair">
            {energyPhotos.map((photo, i) => (
              <div key={photo.src} className="timeline-photo">
                <AnimatedPhoto
                  src={photo.src}
                  alt={photo.alt}
                  size="medium"
                  shape="rounded"
                  animation="slideUp"
                  delay={i * 200}
                />
                <div className="timeline-content">
                  <p>{photo.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="decisions" className="section-content u-mt-4">
        <div className="section-header">
          <h2>The Three Biggest Decisions of My Life</h2>
        </div>
        <div className="grid grid--3 grid--gap-lg">
          {lifeDecisions.map((decision) => (
            <Link
              key={decision.rank}
              to={decision.to}
              className="card card--elevated card--link"
            >
              <div className="card-body">
                <span className="metric-value">{decision.rank}</span>
                <h4 className="u-text-primary u-mb-2">{decision.title}</h4>
                <p className="u-text-sm u-mb-0">{decision.body}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="journey-timeline">
          <div className="timeline-photos timeline-photos--stacked">
            {decisionPhotos.map((photo, i) => (
              <div
                key={photo.src}
                className={`timeline-photo${photo.wide ? ' timeline-photo--wide' : ''}`}
              >
                <AnimatedPhoto
                  src={photo.src}
                  alt={photo.alt}
                  size="medium"
                  shape="rounded"
                  animation="slideUp"
                  delay={i * 200}
                />
                <div className="timeline-content">
                  <h3>{photo.title}</h3>
                  <p>{photo.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dream" className="section-content u-mt-4">
        <div className="section-header">
          <h2>The Dream</h2>
        </div>
        <div className="card card--elevated u-mb-3">
          <div className="card-body">
            <p className="u-text-lg u-mb-0">
              i try not to preach about this..i know the topic makes people uncomfortable, and
              nobody has ever been argued into compassion over dinner. so this page is the one
              place on this site where I say what I actually believe, plainly, and you are free
              to take it or leave it.
            </p>
          </div>
        </div>
        <div className="card card--gradient">
          <div className="card-body">
            <p className="u-text-lg">
              my dream is a vegan world..people laugh when I say that out loud. but we do not
              have to look far back in history to find a world where slavery and public
              executions were omnipresent - normal, legal, and defended by respectable people,
              as they had been for thousands of years across the world. then, in what amounts to
              a blink of history, whole societies decided those practices were barbaric..that is
              how moral progress works: it looks impossible right up until it happens.
            </p>
            <p className="u-text-lg">
              i believe the butchering of animals can join that list. why can&apos;t we live in a
              world where that thought is unthinkable?
            </p>
            <p className="u-text-xl u-text-primary u-font-bold u-text-center u-my-2">
              if we can&apos;t hurt a chicken, how can we hurt a human?
            </p>
            <p className="u-text-lg u-mb-0">
              a world with that much practiced compassion is a world I find it hard to imagine
              waging wars - and one with much more love in it. that is the dream..you do not
              have to share it. but now you know where the energy comes from, and what I hope it
              is for.
            </p>
          </div>
        </div>

        <div className="journey-timeline">
          <div className="timeline-photos timeline-photos--stacked">
            {dreamPhotos.map((photo, i) => (
              <div
                key={photo.src}
                className={`timeline-photo${photo.wide ? ' timeline-photo--wide' : ''}`}
              >
                <AnimatedPhoto
                  src={photo.src}
                  alt={photo.alt}
                  size="medium"
                  shape="rounded"
                  animation="slideUp"
                  delay={i * 200}
                />
                <div className="timeline-content">
                  <h3>{photo.title}</h3>
                  <p>{photo.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Quote id="vegan" />
    </article>
  </Main>
);

export default Vegan;
