import styles from './todoItem.module.css';
import { Todos } from '../../types/todos';

type TodoProps = {
  todo: Todos;
  key: number;
};

const TodoItem = ({ todo }: TodoProps) => {
  const deleteTodo = () => {};
  const changeTodoState = () => {};

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
