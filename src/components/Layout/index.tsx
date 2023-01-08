import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <section className={styles.layout}>{children}</section>;
};

export default Layout;
