import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const CaseStudies = () => (
  <Main
    title="Case Studies"
    description="Deep technical dives into AI implementations, including failures, learnings, and long-term strategies."
  >
    <article className="post page" id="case-studies">
      <div className="page-header">
        <h1>Case Studies</h1>
        <p className="subtitle">Real-world AI implementations with honest reflections on what worked, what didn't, and what I learned</p>
      </div>

      {/* Featured Case Study */}
      <section className="section-content featured-case-study">
        <div className="card card--elevated card--large">
          <div className="card-header">
            <span className="badge badge--new">New</span>
            <h3>Building a Production RAG System That Actually Scales</h3>
            <p className="subtitle">How we went from 5-second response times to 300ms while handling 10x traffic</p>
          </div>
          
          <div className="card-body">
            <div className="case-study-meta">
              <div className="meta-item">
                <i className="fas fa-calendar"></i>
                <span>Project Duration: 6 months</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-users"></i>
                <span>Team Size: 4 engineers</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-chart-line"></i>
                <span>Impact: 10x performance improvement</span>
              </div>
            </div>

            <div className="case-study-preview">
              <h4>The Challenge</h4>
              <p>
                A Fortune 500 client needed to transform their document search system handling 50M+ documents 
                into an intelligent Q&A system. The existing elasticsearch setup took 5+ seconds per query 
                and couldn't handle natural language questions.
              </p>

              <h4>What We Tried (And Failed)</h4>
              <div className="failure-box">
                <h5><span role="img" aria-label="Failed">❌</span> Attempt #1: Direct GPT-4 Integration</h5>
                <p>
                  <strong>What we did:</strong> Naive implementation passing entire documents to GPT-4<br/>
                  <strong>Why it failed:</strong> $10,000/day in API costs, 30-second timeouts<br/>
                  <strong>Lesson learned:</strong> Context window limits and costs compound quickly at scale
                </p>
              </div>

              <div className="failure-box">
                <h5><span role="img" aria-label="Failed">❌</span> Attempt #2: Simple Vector Database</h5>
                <p>
                  <strong>What we did:</strong> Basic ChromaDB setup with OpenAI embeddings<br/>
                  <strong>Why it failed:</strong> Poor relevance, no handling of document updates<br/>
                  <strong>Lesson learned:</strong> Embeddings alone miss crucial keyword matching
                </p>
              </div>

              <h4>The Breakthrough</h4>
              <p>
                After two failed attempts and honest conversations with the team, we realized we needed a 
                hybrid approach. The junior engineer on our team suggested combining BM25 keyword search 
                with semantic search - a insight that became the foundation of our solution.
              </p>

              <div className="success-box">
                <h5><span role="img" aria-label="Success">✅</span> Final Architecture</h5>
                <ul>
                  <li>Hybrid search: BM25 + Dense retrieval with cross-encoder reranking</li>
                  <li>Hierarchical indexing: Document → Section → Paragraph</li>
                  <li>Smart caching: Redis for embeddings, edge caching for common queries</li>
                  <li>Async processing: Background jobs for document processing</li>
                  <li>Fallback strategies: Graceful degradation when models are unavailable</li>
                </ul>
              </div>

              <h4>Results & Long-term Impact</h4>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">300ms</div>
                  <div className="result-label">Average response time</div>
                </div>
                <div className="result-card">
                  <div className="result-number">94%</div>
                  <div className="result-label">Relevance accuracy</div>
                </div>
                <div className="result-card">
                  <div className="result-number">$2,000</div>
                  <div className="result-label">Monthly API costs</div>
                </div>
                <div className="result-card">
                  <div className="result-number">1M+</div>
                  <div className="result-label">Daily queries handled</div>
                </div>
              </div>

              <h4>What I'd Do Differently</h4>
              <p>
                Looking back, I should have started with the hybrid approach. My bias toward "latest and greatest" 
                led me to overlook proven information retrieval techniques. The team's collaborative approach 
                and willingness to admit failures quickly was what saved the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="section-content case-study-grid">
        <div className="section-header">
          <h2>More Case Studies</h2>
        </div>
        
        <div className="grid grid--3 grid--gap-lg">
          <div className="card card--hover">
            <div className="card-body">
              <span className="badge badge--secondary">Failed Project</span>
              <h4>When Real-Time AI Wasn't The Answer</h4>
              <p>
                How I convinced a client NOT to use AI for their trading system, 
                saving them $2M and our relationship.
              </p>
              <div className="case-study-tags">
                <span className="tag">Restraint</span>
                <span className="tag">Client Trust</span>
                <span className="tag">Alternative Solutions</span>
              </div>
            </div>
          </div>

          <div className="card card--hover">
            <div className="card-body">
              <span className="badge badge--success">Team Success</span>
              <h4>Mentoring Junior Devs in AI Development</h4>
              <p>
                How teaching two bootcamp grads to build LLM apps taught me more 
                about clear architecture than any senior role.
              </p>
              <div className="case-study-tags">
                <span className="tag">Mentorship</span>
                <span className="tag">Team Growth</span>
                <span className="tag">Knowledge Transfer</span>
              </div>
            </div>
          </div>

          <div className="card card--hover">
            <div className="card-body">
              <span className="badge badge--primary">Long-term Project</span>
              <h4>3-Year Evolution of an AI Platform</h4>
              <p>
                From MVP to 50M users: How continuous iteration beat 
                big-bang releases in production AI.
              </p>
              <div className="case-study-tags">
                <span className="tag">Scale</span>
                <span className="tag">Maintenance</span>
                <span className="tag">Technical Debt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="section-content thought-leadership">
        <div className="section-header">
          <h2>Thought Leadership</h2>
        </div>
        
        <div className="article-card">
          <div className="article-header">
            <span className="article-type">Opinion</span>
            <span className="reading-time">8 min read</span>
          </div>
          <h4>When NOT to Use AI: A Guide for Technical Leaders</h4>
          <p className="article-excerpt">
            After implementing AI solutions for 5+ years, I've learned that knowing when NOT to use AI 
            is just as valuable as knowing how to implement it. Here's my framework for making that decision...
          </p>
          <Link to="/insights/when-not-to-use-ai" className="btn btn--secondary">
            Read Article
          </Link>
        </div>
      </section>
    </article>
  </Main>
);

export default CaseStudies;