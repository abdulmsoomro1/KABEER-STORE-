import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactButtons() {
  const { t } = useTranslation();
  const [whatsappClicked, setWhatsappClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);

  const handleWhatsappClick = () => {
    setWhatsappClicked(true);
    setTimeout(() => setWhatsappClicked(false), 300);
  };

  const handleEmailClick = () => {
    setEmailClicked(true);
    setTimeout(() => setEmailClicked(false), 300);
  };

  return (
    <div className="contact-buttons">
      <a
        href="https://wa.me/966533717837?text=Hello%20Kabeer%20Store!"
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-button ${whatsappClicked ? 'clicked' : ''}`}
        onClick={handleWhatsappClick}
      >
        {t('contact_whatsapp')}
      </a>
      <a
        href="mailto:kabeerstore02@gmail.com"
        className={`email-button ${emailClicked ? 'clicked' : ''}`}
        onClick={handleEmailClick}
      >
        {t('contact_email')}
      </a>
    </div>
  );
}