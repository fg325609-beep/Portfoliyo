import React, { useState } from 'react';

import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#home">{t('header.nav.home')}</a></li>
              <li><a href="#about">{t('header.nav.about')}</a></li>
              <li><a href="#services">{t('header.nav.services')}</a></li>
              <li><a href="#portfolio">{t('header.nav.portfolio')}</a></li>
              <li><a href="#contact">{t('header.nav.contact')}</a></li>
            </ul>
          </nav>
          
          <select 
            value={i18n.language} 
            onChange={changeLanguage}
            className="lang-select"
          >
            <option value="uz">UZB</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </header>
    </div>
  );
};

export default Header;