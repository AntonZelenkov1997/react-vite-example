import { StorageKeys, getInitialStorageValue } from '@/utils';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/index.json';
import ru from './locales/ru/index.json';

export enum Language {
  EN = 'en',
  RU = 'ru'
}

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: getInitialStorageValue(StorageKeys.Language, Language.EN),
    lng: getInitialStorageValue(StorageKeys.Language, Language.EN),
    resources: {
      en: {
        translations: en
      },
      ru: {
        translations: ru
      }
    },
    ns: ['translations'],
    defaultNS: 'translations'
  })
  .catch(() => {
    throw new Error('Localization error detected');
  });

i18n.languages = [Language.EN, Language.RU];

export default i18n;
