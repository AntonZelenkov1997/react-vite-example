import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CloseCircleOutlined } from '@ant-design/icons';
import styles from './style.module.scss';
import Directive from '../Directive';

interface Props {
  onChange: (text: string) => void;
  value: string;
}

const TodoInput: FC<Props> = ({ onChange, value }) => {
  const { t } = useTranslation();

  const placeholder = t('App.TodoList.TodoInput.Placeholder');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onClearClick = () => {
    onChange('');
  };

  return (
    <div className={styles.todoInput}>
      <input
        placeholder={placeholder}
        type="text"
        className={styles.todoInput__text}
        onChange={onInputChange}
        value={value}
      />
      <Directive IF={value}>
        <button
          type="button"
          className={styles.todoInput__clear}
          onClick={onClearClick}
        >
          <CloseCircleOutlined />
        </button>
      </Directive>
    </div>
  );
};

export default TodoInput;
