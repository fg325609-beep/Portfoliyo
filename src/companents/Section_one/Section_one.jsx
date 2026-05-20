import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCode, FaPaintBrush } from 'react-icons/fa'; 
import { BiBarChartAlt2 } from 'react-icons/bi'; 
import "./Section_one.scss";

const Section_one = () => {
  const { t } = useTranslation();

  const servicesList = t('services.list', { returnObjects: true }) || [];

  const cardIcons = [<FaCode />, <FaPaintBrush />, <BiBarChartAlt2 />];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="wrapper">
          
          <h1 className="section-title">
            {t('services.title_part1')}
            <span>{t('services.title_part2')}</span>
          </h1>

          <div className="cards">
            {Array.isArray(servicesList) && servicesList.map((item, index) => (
              <div className="card" key={index}>
                <div className="icon-box">
                  {cardIcons[index]}
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button className="read-more-btn">{item.btn}</button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section_one;