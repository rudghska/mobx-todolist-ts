import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To Do List</h1>
      <p className={styles.howMany}>할 일 : {}개</p>
    </header>
  );
};

export default Header;
