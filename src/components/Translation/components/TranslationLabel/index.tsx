import { FC } from 'react';
import { Language } from '@/i18n';
import ReactCountryFlag from 'react-country-flag';
import styles from './style.module.scss';
import type { TranslationsType } from '../../';

interface Props {
  item: TranslationsType[Language];
}

const TranslationLabel: FC<Props> = ({ item }) => {
  return (
    <div className={styles.translationLabel}>
      <ReactCountryFlag countryCode={item.countryCode} svg />
      {item.title}
    </div>
  );
};

export default TranslationLabel;
