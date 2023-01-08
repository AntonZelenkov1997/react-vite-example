import { useAppDispatch, useAppSelector } from '@/store';
import { todoListActions } from '@/store/todoList';
import { todoList, todoListOfId } from '@/store/todoList/selectors';
import { DragEventHandler, FC, useState } from 'react';
import TodoCard from '../TodoCard';
import styles from './style.module.scss';

const TodoList: FC = () => {
  const list = useAppSelector(todoList);

  const todoListId = useAppSelector(todoListOfId);

  const dispatch = useAppDispatch();

  const [draggableItem, setDraggableItem] = useState<null | HTMLLIElement>(
    null
  );

  const onDragStart: DragEventHandler<HTMLLIElement> = (e) => {
    const target = e.target as HTMLLIElement;
    target.classList.add(styles.draggable);
    setDraggableItem(target);
  };

  const onDragEnd: DragEventHandler<HTMLLIElement> = (e) => {
    const target = e.target as HTMLLIElement;
    target.classList.remove(styles.draggable);
    setDraggableItem(null);
  };

  const onDragOver: DragEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault();
  };

  const onDragEnter: DragEventHandler<HTMLLIElement> = (e) => {
    const target = e.target as HTMLLIElement;
    if (draggableItem) swapElements(draggableItem, target);
  };

  const swapElements = (
    firstElement: HTMLLIElement,
    secondElement: HTMLLIElement
  ) => {
    const indexOfDraggableElement = todoListId.indexOf(
      firstElement.attributes['data-id'].value
    );

    const indexOfSwapElement = todoListId.indexOf(
      secondElement.attributes['data-id'].value
    );

    const draggable = list[indexOfDraggableElement];
    const swap = list[indexOfSwapElement];

    const newList = [...list];

    newList[indexOfDraggableElement] = swap;
    newList[indexOfSwapElement] = draggable;

    dispatch(todoListActions.setList(newList));
  };

  return (
    <div className={styles.todoList}>
      <ul className={styles.todoList__list}>
        {list.map((item) => (
          <TodoCard
            key={item.id}
            task={item}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
