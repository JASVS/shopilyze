import { FC } from 'react';

import { useTranslations } from 'next-intl';

const Home: FC = () => {
  const t = useTranslations('Index');

  return <p>{t('title')}</p>;
};

export default Home;
