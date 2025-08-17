import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const WhenNotAI = () => (
  <Main
    title="When NOT to Use AI"
    description="A guide for technical leaders on recognizing when traditional solutions beat AI, based on real project failures and successes."
  >
    <article className="post article" id="when-not-ai">
      <header>
        <div className="title">
          <h2>When NOT to Use AI: A Guide for Technical Leaders</h2>
          <p className="subtitle">
            After implementing AI solutions for 5+ years and burning through my share of budgets, 
            I've learned that knowing when NOT to use AI is just as valuable as knowing how to implement it.
          </p>
          <div className="article-meta">
            <span><i className="fas fa-clock"></i> 8 min read</span>
            <span><i className="fas fa-calendar"></i> August 2025</span>
            <span><i className="fas fa-user"></i> By Abishek Ganesh</span>
          </div>
        </div>
      </header>

      <div className="article-content">
        <section>
          <p className="lead">
            Last month, I talked a client out of a $2M AI project. They wanted to use GPT-5 for 
            real-time financial fraud detection. After two days of discovery, I recommended they 
            stick with their rule-based system. They were shocked. Here's why I was right.
          </p>
        </section>

        <section>
          <h3>The Uncomfortable Truth About AI</h3>
          <p>
            We're in an AI gold rush. Every company wants it, VCs fund it, and engineers 
            (myself included) love building it. But here's what nobody talks about at conferences:
          </p>
          
          <div className="highlight-box">
            <p>
              <strong>Most problems don't need AI.</strong> They need better data models, 
              cleaner code, or simpler UX. AI is often a $500,000 solution to a $5,000 problem.
            </p>
          </div>
        </section>

        <section>
          <h3>My Framework: The 5 Red Flags</h3>
          
          <div className="framework-card">
            <h4><span role="img" aria-label="Red flag">🚩</span> Red Flag #1: Deterministic Requirements</h4>
            <p>
              <strong>If your problem has clear rules and predictable outputs, you don't need AI.</strong>
            </p>
            <div className="example-box">
              <h5>Real Example:</h5>
              <p>
                A logistics company wanted to use AI for route optimization. Their constraints were:
                trucks can't exceed weight limits, drivers can't work over 8 hours, and certain 
                roads have time restrictions. This is a graph problem, not an AI problem. 
                We built it with Dijkstra's algorithm in 2 weeks instead of 6 months.
              </p>
            </div>
          </div>

          <div className="framework-card">
            <h4><span role="img" aria-label="Red flag">🚩</span> Red Flag #2: Explainability Requirements</h4>
            <p>
              <strong>If you need to explain every decision to regulators or customers, AI might be a liability.</strong>
            </p>
            <div className="example-box">
              <h5>Real Example:</h5>
              <p>
                A healthcare startup wanted AI for insurance claim approvals. Legal required 
                detailed explanations for every rejection. GPT-4's "because the pattern suggests" 
                doesn't hold up in court. We built a decision tree system instead - boring but defensible.
              </p>
            </div>
          </div>

          <div className="framework-card">
            <h4><span role="img" aria-label="Red flag">🚩</span> Red Flag #3: Latency Constraints Under 100ms</h4>
            <p>
              <strong>If you need consistent sub-100ms responses, AI will frustrate you.</strong>
            </p>
            <div className="example-box">
              <h5>Real Example:</h5>
              <p>
                High-frequency trading firm wanted AI for order execution. Even with edge deployment 
                and optimization, we couldn't guarantee &lt;50ms latency. Their existing algorithm 
                was already at 5ms. AI would have made them slower and poorer.
              </p>
            </div>
          </div>

          <div className="framework-card">
            <h4><span role="img" aria-label="Red flag">🚩</span> Red Flag #4: Perfect Accuracy Requirements</h4>
            <p>
              <strong>If 99.9% accuracy isn't enough, AI will disappoint you.</strong>
            </p>
            <div className="example-box">
              <h5>Real Example:</h5>
              <p>
                A nuclear facility wanted AI for safety monitoring. "99.9% accurate" means 1 in 1000 
                failures. In nuclear safety, that's unacceptable. Rule-based systems with redundancy 
                achieve 99.9999% reliability. Sometimes boring is better.
              </p>
            </div>
          </div>

          <div className="framework-card">
            <h4><span role="img" aria-label="Red flag">🚩</span> Red Flag #5: Limited or Biased Training Data</h4>
            <p>
              <strong>If you have less than 10,000 quality examples, AI will hallucinate.</strong>
            </p>
            <div className="example-box">
              <h5>Real Example:</h5>
              <p>
                A startup wanted AI to generate legal contracts for a niche industry. They had 
                50 example contracts. The AI started inventing clauses that sounded legal but 
                were nonsense. We pivoted to a template system with variable insertion. 
                Less sexy, more reliable.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3>The $2M I Saved By Saying "No"</h3>
          <p>
            Remember that financial fraud detection project? Here's what I told the client:
          </p>
          
          <blockquote>
            "Your current rule-based system catches 94% of fraud with 0.1% false positives. 
            It processes transactions in 10ms and costs $10k/month to run. An AI solution 
            might get you to 96% detection, but with 0.5% false positives, 200ms latency, 
            and $100k/month in API costs. That's 5x more angry customers calling about 
            frozen cards for a 2% improvement in catch rate."
          </blockquote>
          
          <p>
            They kept their existing system and used the saved budget to hire two data analysts 
            who improved the rules and got detection to 96% anyway.
          </p>
        </section>

        <section>
          <h3>When AI IS The Right Choice</h3>
          <p>
            I'm not anti-AI. I've built my career on it. But AI shines in specific scenarios:
          </p>
          
          <ul className="checklist">
            <li><span role="img" aria-label="Check">✅</span> <strong>Unstructured data:</strong> Text, images, audio that need understanding</li>
            <li><span role="img" aria-label="Check">✅</span> <strong>Pattern recognition:</strong> Finding insights humans would miss</li>
            <li><span role="img" aria-label="Check">✅</span> <strong>Creative generation:</strong> Content, code, designs that need variety</li>
            <li><span role="img" aria-label="Check">✅</span> <strong>Natural interaction:</strong> Chatbots, voice assistants, conversational interfaces</li>
            <li><span role="img" aria-label="Check">✅</span> <strong>Prediction with uncertainty:</strong> Forecasting where 85% accuracy is valuable</li>
          </ul>
        </section>

        <section>
          <h3>The Questions to Ask Before Starting Any AI Project</h3>
          
          <div className="question-framework">
            <ol>
              <li>
                <strong>What's the simplest solution that could work?</strong>
                <p>Start there. You can always add AI later.</p>
              </li>
              <li>
                <strong>Can I afford to be wrong 5-10% of the time?</strong>
                <p>If no, reconsider AI.</p>
              </li>
              <li>
                <strong>Do I have the data volume and quality to train effectively?</strong>
                <p>If no, gather data first.</p>
              </li>
              <li>
                <strong>Will the ROI justify the complexity?</strong>
                <p>Calculate real costs including maintenance.</p>
              </li>
              <li>
                <strong>Can my team maintain this in 2 years?</strong>
                <p>If everyone who understands it might leave, simplify.</p>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h3>The Competitive Advantage of Restraint</h3>
          <p>
            Here's the counterintuitive truth: In the AI gold rush, the companies that show 
            restraint often win. They:
          </p>
          <ul>
            <li>Ship faster with simpler solutions</li>
            <li>Spend less on infrastructure</li>
            <li>Have fewer catastrophic failures</li>
            <li>Build trust by solving real problems</li>
          </ul>
          
          <p>
            My reputation isn't built on implementing AI everywhere. It's built on implementing 
            AI where it matters and having the wisdom to recognize the difference.
          </p>
        </section>

        <section className="conclusion">
          <h3>The Bottom Line</h3>
          <p>
            AI is a powerful tool, not a universal solution. The best AI engineers know when 
            to use it and, more importantly, when not to. Your job isn't to use the most 
            advanced technology – it's to solve problems effectively.
          </p>
          
          <p>
            Next time someone says "we need AI for this," ask them why. If they can't explain 
            it without using the words "innovative" or "cutting-edge," you probably don't need AI.
          </p>
          
          <p>
            <em>
              Sometimes the most innovative thing you can do is choose the boring solution that works.
            </em>
          </p>
        </section>

        <section className="author-note">
          <h4>About This Article</h4>
          <p>
            This piece is based on real projects where I've either successfully talked clients 
            out of unnecessary AI implementations or learned expensive lessons about when AI 
            fails. Names and specific details have been changed for confidentiality.
          </p>
          
          <div className="cta-section">
            <h4>Need an Honest AI Assessment?</h4>
            <p>
              I offer discovery sprints where I'll tell you whether AI is right for your problem 
              – even if it means talking myself out of a larger project.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Schedule a Discovery Sprint
            </Link>
          </div>
        </section>
      </div>
    </article>
  </Main>
);

export default WhenNotAI;