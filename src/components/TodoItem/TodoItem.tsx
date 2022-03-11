import styles from './todoItem.module.css';
import { ITodos } from '../../types/todos';
import { ITodoStore } from '../../types/todos';
import { useStore } from '../../store/useStore';

interface Todo {
  todo: ITodos;
}

const TodoItem = ({ todo }: Todo) => {
  const { todoStore }: ITodoStore = useStore();

  const deleteTodo = () => {
    todoStore!.removeTodo(todo.id);
  };
  const changeTodoState = () => {
    todoStore!.checkTodoState(todo.id);
  };

  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" onChange={changeTodoState} />
      <span className={styles.todoName}>{todo.todoName}</span>
      <button onClick={deleteTodo} className={styles.button}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default TodoItem;
