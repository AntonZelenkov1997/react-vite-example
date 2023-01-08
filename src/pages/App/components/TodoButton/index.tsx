import { FC } from 'react';
import Directive from '../Directive';
import styles from './style.module.scss';

interface Props {
  value?: string;
  children?: React.ReactNode;
  Icon: string;
  onClick: () => void;
}

const TodoButton: FC<Props> = ({ value = '', children, Icon, onClick }) => {
  return (
    <button type="button" className={styles.todoButton} onClick={onClick}>
      <Directive IF={children}>{children}</Directive>
      <Directive IF={!children}>
        <span>{value}</span>
        <Directive IF={!Icon}>
          <Icon />
        </Directive>
      </Directive>
    </button>
  );
};

export default TodoButton;
