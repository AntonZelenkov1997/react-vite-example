import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import i18n, { Language } from '@/i18n';

import styles from './style.module.scss';
import TranslationLabel from './components/TranslationLabel';
import { StorageManager, StorageKeys } from '@/utils';

export type TranslationsType = {
  [key in Language]: {
    title: string;
    countryCode: string;
  };
};

const Translations: TranslationsType = {
  [Language.EN]: {
    title: 'English',
    countryCode: 'GB'
  },
  [Language.RU]: {
    title: 'Русский',
    countryCode: 'RU'
  }
};

const Translation = () => {
  const changeLanguage = async (language: Language) => {
    await i18n.changeLanguage(language);
  };

  const items: MenuProps['items'] = Object.entries(Translations).map(
    ([key, value]) => ({
      key: Math.random(),
      label: <TranslationLabel item={value} />,
      onClick: async () => {
        await changeLanguage(key as Language);
        StorageManager.set(StorageKeys.Language, key);
      }
    })
  );

  return (
    <div className={styles.translation}>
      <Dropdown menu={{ items }}>
        <span className={styles.translation__icon}>
          <TranslationOutlined />
        </span>
      </Dropdown>
    </div>
  );
};

export default Translation;
