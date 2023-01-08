import TodoCheckbox from '../TodoCheckbox';
import styles from './style.module.scss';
import TrashCan from '@/assets/icons/trash.svg';
import { DragEventHandler, FC } from 'react';
import { TodoListItem } from '@/store/todoList/types';
import { todoListActions } from '@/store/todoList';
import { useAppDispatch } from '@/store';
import { useTranslation } from 'react-i18next';

interface Props {
  task: TodoListItem;
  onDragStart: DragEventHandler<HTMLLIElement>;
  onDragEnd: DragEventHandler<HTMLLIElement>;
  onDragOver: DragEventHandler<HTMLLIElement>;
  onDragEnter: DragEventHandler<HTMLLIElement>;
}

const TodoCard: FC<Props> = ({
  task,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragEnter,
}) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const removeTitle = t('App.TodoList.TodoCard.Remove');

  const onRemoveClick = () => {
    dispatch(todoListActions.remove(task.id));
  };

  return (
    <li
      className={styles.todoCard}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      draggable="true"
      data-id={task.id}
    >
      <TodoCheckbox task={task} />

      <button
        title={removeTitle}
        type="button"
        className={styles.trashCan}
        onClick={onRemoveClick}
      >
        <TrashCan />
      </button>
    </li>
  );
};

export default TodoCard;
