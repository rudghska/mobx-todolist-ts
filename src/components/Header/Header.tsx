import styles from './header.module.css';
import { observer } from 'mobx-react';
import { useStore } from '../../store/useStore';
import { ITodoStore } from '../../types/todos';

const Header = () => {
  const { todoStore }: ITodoStore = useStore();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To Do List</h1>
      <p className={styles.howMany}>할 일 : {todoStore!.todosLength}개</p>
    </header>
  );
};

export default observer(Header);
