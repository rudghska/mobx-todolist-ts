import { /*makeAutoObservable,*/ action, computed, makeObservable, observable, toJS } from 'mobx';
import { ITodos } from '../types/todos';

class TodoStore {
  private todos: ITodos[] = [];

  constructor() {
    // makeAutoObservable(this);
    makeObservable<TodoStore | ITodos[]>(this, {
      todos: observable,
      todosLength: computed,
      list: computed,
      addTodo: action,
      removeTodo: action,
    });
  }

  get list() {
    return toJS<ITodos[]>(this.todos);
  }

  get todosLength() {
    return this.todos.filter(todo => !todo.isDone).length;
  }

  addTodo(name: string, isDone: boolean, id: number) {
    this.todos.push({
      todoName: name,
      isDone,
      id,
    });
  }

  removeTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}

// class TodoStore {
//   constructor() {
//     makeObservable(this);
//   }

//   @observable
//   private todos: Todos[] = [];

//   @computed
//   get list() {
//     return toJS(this.todos);
//   }
//   @computed
//   get todosLength() {
//     return this.todos.filter(todo => !todo.isDone).length;
//   }

//   @action
//   addTodo(name: string, isDone: boolean, id: number) {
//     this.todos.push({
//       todoName: name,
//       isDone,
//       id,
//     });
//   }

//   @action
//   removeTodo(id: number) {
//     const index = this.todos.findIndex(todo => todo.id === id);
//     if (index > -1) {
//       this.todos.splice(index, 1);
//     }
//   }
// }

export default TodoStore;
