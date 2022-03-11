import styles from './todoItem.module.css';
import { ITodos } from '../../types/todos';

interface Todo {
  todo: ITodos;
}

const TodoItem = ({ todo }: Todo) => {
  console.log(todo);
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
