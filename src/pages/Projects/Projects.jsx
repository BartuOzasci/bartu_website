// Tüm projelerin listelendiği ayrı sayfa
import React from 'react';
import { projectsData } from '../../data/data';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        
        {/* Bölüm Başlığı */}
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h2 className="display-5 fw-bold text-dark">Projelerim</h2>
            <p className="text-muted">Güncel çalışmalarım ve geliştirdiğim uygulamalar</p>
            <div className="mx-auto" style={{ height: '3px', width: '60px', background: '#0dcaf0' }}></div>
          </div>
        </div>

        {/* Proje Kartları Grid Yapısı */}
        <div className="row g-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-12">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;