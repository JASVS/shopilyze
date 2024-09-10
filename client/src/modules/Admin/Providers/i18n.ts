import polyglotI18nProvider from 'ra-i18n-polyglot';

import ukrainianMessages from '../../../../messages/uk';

const messages = {
  ru: () =>
    import('../../../../messages/ru').then((messages) => messages.default),
};

export default polyglotI18nProvider(
  (locale) => {
    if (locale === 'ru') {
      return messages[locale]();
    }

    return ukrainianMessages;
  },
  'uk',
  [
    { locale: 'uk', name: 'Українська' },
    { locale: 'ru', name: 'Русский' },
  ],
);
