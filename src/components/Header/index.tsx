import styles from './style.module.scss';
import Logo from '@/assets/logo/logo.svg';
import Translation from '../Translation';
import ThemeSwitch from '../ThemeSwitch';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <ThemeSwitch />
        <Translation />
      </div>
      <Logo />
    </header>
  );
};

export default Header;
