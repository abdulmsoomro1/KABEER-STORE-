import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isClicked, setIsClicked] = useState(false);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <header>
      <h1>{t('title')}</h1>
      <button
        className={isClicked ? 'clicked' : ''}
        onClick={changeLanguage}
      >
        {t('language')}
      </button>
    </header>
  );
}