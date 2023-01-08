import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import { useAppDispatch, useAppSelector } from '@/store';
import { todoListActions } from '@/store/todoList';
import Plus from '@/assets/icons/plus.svg';
import styles from './style.module.scss';
import TodoButton from './components/TodoButton';
import TodoInput from './components/TodoInput';
import Status from './components/Status';
import TodoList from './components/TodoList';
import TodoEmptyList from './components/TodoEmptyList';
import Directive from './components/Directive';
import { StorageManager, StorageKeys } from '@/utils';
import {
  todoCheckedList,
  todoList,
  todoQuery
} from '@/store/todoList/selectors';

const App: FC = () => {
  const list = useAppSelector(todoList);
  const checkedList = useAppSelector(todoCheckedList);

  const query = useAppSelector(todoQuery);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const countOfList = {
    checked: checkedList.length.toString(),
    all: list.length.toString()
  };

  const titles = {
    todoButton: t('App.TodoList.TodoButton.Text'),
    todoStatus: {
      allTasks: t('App.TodoList.TodoStatus.AllTasks'),
      currentTasks: t('App.TodoList.TodoStatus.CurrentTasks')
    }
  };

  const todoClick = () => dispatch(todoListActions.add(query));

  const onTodoChange = (text: string) => dispatch(todoListActions.setQuery(text));

  useEffect(() => {
    StorageManager.set(StorageKeys.TodoList, list);
  }, [list]);

  return (
    <div className={styles.app}>
      <Header />
      <Layout>
        <div className={styles.layout}>
          <div className={styles.container}>
            <div className={styles.todoInput}>
              <TodoInput onChange={onTodoChange} value={query} />
              <TodoButton
                value={titles.todoButton}
                Icon={Plus}
                onClick={todoClick}
              />
            </div>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <Status
                  title={titles.todoStatus.allTasks}
                  value={countOfList.all}
                  titleClassName={styles.allTasks}
                />
                <Status
                  title={titles.todoStatus.currentTasks}
                  value={`${countOfList.checked} / ${countOfList.all}`}
                  titleClassName={styles.currentTasks}
                />
              </div>
              <Directive IF={list.length}>
                <TodoList />
              </Directive>
              <Directive IF={list.length === 0}>
                <TodoEmptyList />
              </Directive>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default App;
