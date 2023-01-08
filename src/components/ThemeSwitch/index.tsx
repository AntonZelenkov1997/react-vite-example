import { Switch, Tooltip } from 'antd';
import { SwitchChangeEventHandler } from 'antd/es/switch';
import { ThunderboltTwoTone } from '@ant-design/icons';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import {
  getInitialStorageValue,
  getPreferedTheme,
  StorageKeys,
  StorageManager
} from '@/utils';
import { Themes } from '@/themes';
import useThemeListener from '@/hooks/useThemeListener';
import { useTranslation } from 'react-i18next';

const ThemeSwitch: FC = () => {
  const { t } = useTranslation();

  const transitionTimeout: MutableRefObject<NodeJS.Timeout | null> =
    useRef(null);

  const tooltipTitle = t('App.Themes.Switch.Tooltip.Title');

  const [theme, setTheme] = useState<Themes>(
    getInitialStorageValue(StorageKeys.Theme, getPreferedTheme())
  );

  const [userChangedTheme, setUserChangedTheme] = useState(
    StorageManager.get(StorageKeys.Theme)
  );

  const onChange: SwitchChangeEventHandler = (checked) => {
    if (checked) setTheme(Themes.Dark);
    else setTheme(Themes.Light);

    setUserChangedTheme(true);
  };

  const clearTransitionTimeout = () => {
    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
  };

  useEffect(() => {
    if (userChangedTheme) {
      StorageManager.set(StorageKeys.Theme, theme);
      document.documentElement.setAttribute('data-theme', theme);

      document.documentElement.classList.add('themeTransition');

      clearTransitionTimeout();

      transitionTimeout.current = setTimeout(() => {
        document.documentElement.classList.remove('themeTransition');
      }, 300);

      return () => {
        clearTransitionTimeout();
      };
    }
  }, [theme]);

  useThemeListener((currentTheme: Themes) => {
    if (!userChangedTheme) setTheme(currentTheme);
  });

  return (
    <div className={styles.themeSwitch}>
      <Tooltip
        title={() => (
          <span className={styles.themeSwitch__tooltip}>{tooltipTitle}</span>
        )}
        color="var(--gray-100)"
      >
        <label className={styles.themeSwitch__label}>
          <Switch
            style={{ backgroundColor: 'var(--blue-dark)' }}
            className={styles.themeSwitch__switch}
            checked={theme === Themes.Dark}
            onChange={onChange}
            checkedChildren={<ThunderboltTwoTone twoToneColor="#d9d9d9" />}
            unCheckedChildren={<ThunderboltTwoTone twoToneColor="#1a1a1a" />}
          />
        </label>
      </Tooltip>
    </div>
  );
};

export default ThemeSwitch;
