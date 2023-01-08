import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';
import ClipBoard from '@/assets/icons/clipboard.svg';
import { FC } from 'react';

const TodoEmptyList: FC = () => {
  const { t } = useTranslation();

  const text = {
    title: t('App.TodoList.TodoEmpty.Title'),
    subTitle: t('App.TodoList.TodoEmpty.SubTitle')
  };

  return (
    <div className={styles.todoEmptyList}>
      <div className={styles.content}>
        <div className={styles.content__clipboard}>
          <ClipBoard />
        </div>
        <div className={styles.content__text}>
          <p className={styles.content__text_bold}>{text.title}</p>
          <p>{text.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoEmptyList;
