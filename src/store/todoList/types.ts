export interface TodoListItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface TodoList {
  list: TodoListItem[];
  query: string;
}
