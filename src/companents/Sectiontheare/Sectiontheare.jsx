import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Sectiontheare.scss";

const Sectiontheare = () => {
  const { t } = useTranslation();

  const BOT_TOKEN = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0";
  const CHAT_ID = "6660879147";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    const textMessage = `
📬 *Yangi Xabar (Portfolio)*\n\n` +
`👤 *Ism:* ${formData.name}\n` +
`📧 *Email:* ${formData.email}\n` +
`📞 *Tel:* ${formData.phone}\n` +
`📝 *Mavzu:* ${formData.subject}\n\n` +
`💬 *Xabar:* ${formData.message}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: textMessage,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setStatus({ loading: false, success: true });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: false });
      }
    } catch (error) {
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        <h1 className="section-title">
          {t('contact.title_part1')}
          <span>{t('contact.title_part2')}</span>
        </h1>

        <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">
          <div className="input-group">
            <input 
              type="text" 
              name="name"
              placeholder={t('contact.name')} 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder={t('contact.email')} 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <input 
              type="tel" 
              name="phone"
              placeholder={t('contact.phone')} 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="subject"
              placeholder={t('contact.subject')} 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>

          <textarea 
            name="message" 
            rows="10" 
            placeholder={t('contact.message')}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {status.success === true && <p className="status-msg success">{t('contact.success')}</p>}
          {status.success === false && <p className="status-msg error">{t('contact.error')}</p>}

          <button type="submit" className="send-btn" disabled={status.loading}>
            {status.loading ? "..." : t('contact.btn')}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Sectiontheare;