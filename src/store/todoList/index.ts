import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StorageKeys, getInitialStorageValue } from '@/utils';
import type { TodoList, TodoListItem } from './types';

const initialState: TodoList = {
  list: getInitialStorageValue(StorageKeys.TodoList, []),
  query: ''
};

const todoListSlice = createSlice({
  name: StorageKeys.TodoList,
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.list.push({
        checked: false,
        id: Math.random().toString(),
        text: action.payload
      });

      state.query = '';
    },
    remove: (state, action: PayloadAction<TodoListItem['id']>) => {
      const itemIndex = state.list
        .map((item) => item.id)
        .indexOf(action.payload);

      state.list.splice(itemIndex, 1);
    },
    setList: (state, action: PayloadAction<TodoList['list']>) => {
      state.list = action.payload;
    },
    toggleChecked: (state, action: PayloadAction<TodoListItem['id']>) => {
      const item = state.list.find(
        (listItem) => listItem.id === action.payload
      );

      if (item) item.checked = !item?.checked;
    },
    setQuery: (state, action: PayloadAction<TodoList['query']>) => {
      state.query = action.payload;
    }
  }
});

const todoListReducer = todoListSlice.reducer;

const todoListActions = todoListSlice.actions;

export { todoListActions };

export default todoListReducer;
