import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import { featuredProjectIds } from '../../data/homepage';

/**
 * ProjectsSection - Featured case studies with impact
 */
const ProjectsSection = () => {
  // Filter to featured projects
  const featuredProjects = projects.filter((p) =>
    featuredProjectIds.includes(p.title)
  );

  return (
    <div className="section-content">
      <h2 className="section-heading">Projects</h2>

      <div className="projects-list">
        {featuredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>

            <p className="project-description">{project.desc}</p>

            <div className="project-tech">
              {project.techStack.slice(0, 5).map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-impact">
              {Object.entries(project.impact).slice(0, 2).map(([key, value]) => (
                <div key={key} className="impact-item">
                  <span className="impact-value">{value}</span>
                  <span className="impact-label">{key}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="section-cta">
        <Link to="/projects" className="link-with-arrow">
          View All Projects
          <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
