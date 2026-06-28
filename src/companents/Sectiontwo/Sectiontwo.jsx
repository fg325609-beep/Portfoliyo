import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import "./Sectiontwo.scss";

const Sectiontwo = () => {
  const { t } = useTranslation();

  const projectList = t('portfolio.projects', { returnObjects: true }) || [];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        
        <h1 className="section-title">
          {t('portfolio.title_part1')}
          <span>{t('portfolio.title_part2')}</span>
        </h1>

        <div className="portfolio-container">
          {Array.isArray(projectList) && projectList.map((project, index) => (
            <div className="portfolio-box" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src="src/companents/img/sectiontwo.jpg" alt={project.title} />
              
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <a href="#link" target="_blank" rel="noreferrer">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sectiontwo;