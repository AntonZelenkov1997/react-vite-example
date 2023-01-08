import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const list = (state: RootState) => state.todoList.list;

const query = (state: RootState) => state.todoList.query;

const todoList = createSelector(list, (list) => list);

const todoCheckedList = createSelector(list, (list) => list.filter(item => item.checked));

const todoListOfId = createSelector(list, (list) =>
  list.map((item) => item.id)
);

const todoQuery = createSelector(query, (query) => query);

export { todoList, todoCheckedList, todoListOfId, todoQuery };
