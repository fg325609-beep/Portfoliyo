import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowUp } from 'react-icons/fa'; // Tepaga qaragan strelka ikonasi
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        
        {/* Mualliflik huquqi matni */}
        <div className="footer-text">
          <p>{t('footer.rights')}</p>
        </div>

        {/* Tepaga qaytish tugmasi (Header dagi #home id-siga ulanadi) */}
        <div className="footer-iconTop">
          <a href="#home">
            <FaArrowUp />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;