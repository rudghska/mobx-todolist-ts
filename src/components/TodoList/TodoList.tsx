import { useRef, useEffect } from 'react';
import styles from './todos.module.css';

const TodosList = () => {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    ulRef.current?.lastElementChild?.scrollIntoView(false);
  });

  return <ul ref={ulRef} className={styles.list}></ul>;
};

export default TodosList;
