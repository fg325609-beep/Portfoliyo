import React from 'react';
import { useTranslation } from 'react-i18next';
// Ikonkalarni to'g'ri va xatosiz import qilamiz
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./Hero.scss";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero">
          
          {/* Chap tomon (Matn va Ikonkalar) */}
          <div className="hero-left">
            <h5>{t('hero.hello')}</h5>
            <h2>John Kendric</h2>
            <h3>
              {t('hero.job_prefix')}
              <span>{t('hero.job_title')}</span>
            </h3>
            <p>{t('hero.description')}</p>
            
            {/* Ijtimoiy tarmoq ikonkalari */}
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>

            {/* Neon effektli yuklab olish tugmasi */}
            <button className="cv-btn">{t('hero.download_btn')}</button>
          </div>

          {/* O'ng tomon (Rasm va Oltiburchak blok) */}
          <div className="hero-right">
            <div className="img-box">
              <img src="src/companents/img/hero.png" alt="John Kendric" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;