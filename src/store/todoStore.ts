import { observable, action, makeObservable, computed, toJS } from 'mobx';
import { Todos } from '../types/todos';

class TodoStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  private todos: Todos[] = [];

  @computed
  get list() {
    return toJS(this.todos);
  }

  @computed
  get todosLength() {
    return this.todos.filter(todo => !todo.isDone).length;
  }

  @action
  addTodo(name: string, isDone: boolean, id: number) {
    this.todos.push({
      todoName: name,
      isDone,
      id,
    });
  }

  @action
  removeTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}

export default TodoStore;
