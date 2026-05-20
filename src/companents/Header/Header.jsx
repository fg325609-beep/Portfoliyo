import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Burger menyu ochish va yopish ikonkalari
import { FaBars, FaTimes } from 'react-icons/fa'; 
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false); // Modal holati

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // Menyu havolasi bosilganda modalni avtomatik yopish funksiyasi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header id="home">
        <div className="container">
          <h1 className="logo">Portfolio</h1>
          
          {/* Navigatsiya qismi (isOpen true bo'lsa 'active' klassi qo'shiladi) */}
          <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <ul>
              <li><a id='#home' href="#home" onClick={toggleMenu}>{t('header.nav.home')}</a></li>
              <li><a href="#about" onClick={toggleMenu}>{t('header.nav.about')}</a></li>
              <li><a href="#services" onClick={toggleMenu}>{t('header.nav.services')}</a></li>
              <li><a href="#portfolio" onClick={toggleMenu}>{t('header.nav.portfolio')}</a></li>
              <li><a href="#contact" onClick={toggleMenu}>{t('header.nav.contact')}</a></li>
            </ul>
          </nav>
          
          {/* Til tanlash va Burger tugmasi o'ng tomonda birga turishi uchun o'rovchi */}
          <div className="header-right">
            <select 
              value={i18n.language} 
              onChange={changeLanguage}
              className="lang-select"
            >
              <option value="uz">UZB</option>
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
            </select>

            {/* Mobil ekranlar uchun burger tugmasi */}
            <button className="menu-burger-btn" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </header>

      {/* Orqa fondagi qora xira qatlam (Modal ochiqligida fon bosilsa ham menyu yopiladi) */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Header;