import TodoStore from '../store/todoStore';

export interface ITodos {
  todoName: string;
  isDone: boolean;
  id: number;
}

export interface ITodoStore {
  todoStore?: TodoStore;
}

export interface TodosC {
  readonly list: ITodos[];
  readonly todosLength: number;
  addTodo: (name: string, isDone: boolean, id: number) => void;
  removeTodo: (id: number) => void;
  checkTodoState: (id: number) => void;
}
