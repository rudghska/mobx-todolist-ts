import TodoStore from '../store/todoStore';

export interface ITodos {
  todoName: string;
  isDone: boolean;
  id: number;
}

export interface ITodoStore {
  todoStore?: TodoStore;
}
