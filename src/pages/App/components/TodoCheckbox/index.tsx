import { useAppDispatch } from '@/store';
import { todoListActions } from '@/store/todoList';
import { TodoListItem } from '@/store/todoList/types';
import type { FC } from 'react';
import styles from './style.module.scss';

interface Props {
  task: TodoListItem;
}

const TodoCheckbox: FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();

  const onInputChange = () => {
    dispatch(todoListActions.toggleChecked(task.id));
  };

  return (
    <label className={styles.todoCheckbox}>
      <input checked={task.checked} type="checkbox" onChange={onInputChange} />
      <span className={styles.label}>{task.text}</span>
      <span className={styles.checkmark} />
    </label>
  );
};

export default TodoCheckbox;
