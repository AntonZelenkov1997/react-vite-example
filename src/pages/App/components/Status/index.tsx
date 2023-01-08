import { cc } from '@/utils';
import { FC } from 'react';
import styles from './style.module.scss';

interface Props {
  title: string;
  titleClassName?: string;
  value: string;
};

const Status: FC<Props> = ({
  title = '',
  titleClassName = '',
  value = ''
}) => {
  return (
    <div className={styles.status}>
      <div className={cc(styles.status__title, titleClassName)}>
        <span>{title}</span>
      </div>
      <div className={styles.status__value}>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Status;
