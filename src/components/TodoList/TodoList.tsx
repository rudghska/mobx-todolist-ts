import { useRef, useEffect } from 'react';
import styles from './todos.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { useStore } from '../../store/useStore';
import { ITodoStore } from '../../types/todos';
import { observer } from 'mobx-react';

const TodosList = () => {
  const { todoStore }: ITodoStore = useStore();
  const ulRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    ulRef.current?.lastElementChild?.scrollIntoView(false);
  });

  return (
    <ul ref={ulRef} className={styles.list}>
      {todoStore!.list.map(todo => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default observer(TodosList);
