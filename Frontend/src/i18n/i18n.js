// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import gbTranslations from './locales/gb.js';
import czTranslations from './locales/cz.js';
import huTranslations from './locales/hu.js';
import { getFromLocalStorage } from '../utils/localStorage.tsx';
import { LANGUAGE } from '../commons/constants.tsx';

const resources = {
  gb: gbTranslations,
  cz: czTranslations,
  hu: huTranslations,
};

i18n.use(initReactI18next).init({
  resources,
  lng: getFromLocalStorage(LANGUAGE) || 'gb',
  // fallbackLng: 'en',
  ns: ['General', 'Tasks', 'Projects', 'Tasks:TableHeaders'],
  defaultNS: 'General',

  react: {
    useSuspense: false,
    defaultTransParent: 'div',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
  },
});

export default i18n;
