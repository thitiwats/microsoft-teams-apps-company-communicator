﻿import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import moment from 'moment';
import 'moment/min/locales.min';

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export const updateLocale = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const locale = params.get("locale") || 'en-US';
  i18n.changeLanguage(locale);
  moment.locale(locale);
};

export const formatDate = (date: string) => {
  if (!date) return date;
  return moment(date).format('l LT');
}

export default i18n;