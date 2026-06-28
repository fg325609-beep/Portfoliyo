import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowUp } from 'react-icons/fa';
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-text">
          <p>{t('footer.rights')}</p>
        </div>

        <div className="footer-iconTop">
          <a id='home' href="#home">
            <FaArrowUp />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;