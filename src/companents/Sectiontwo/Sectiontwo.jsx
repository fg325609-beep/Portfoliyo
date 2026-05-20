import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi'; // Loyihaga havola ikonkasini chiroyli ko'rsatish uchun
import "./Sectiontwo.scss";

const Sectiontwo = () => {
  const { t } = useTranslation();

  // JSON ichidagi loyihalar massivini olamiz
  const projectList = t('portfolio.projects', { returnObjects: true }) || [];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        
        {/* Sarlavha qismi */}
        <h1 className="section-title">
          {t('portfolio.title_part1')}
          <span>{t('portfolio.title_part2')}</span>
        </h1>

        {/* Loyihalar Grid to'plami */}
        <div className="portfolio-container">
          {Array.isArray(projectList) && projectList.map((project, index) => (
            <div className="portfolio-box" key={index}>
              {/* Loyihangiz rasmiga yo'lni moslang */}
              <img src="src/companents/img/sectiontwo.jpg" alt={project.title} />
              
              {/* Rasm ustiga hover bo'lganda chiqadigan qatlam */}
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