import React from 'react';
import styles from './App.module.css';
import InputTodo from './components/InputTodo/InputTodo';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.todoApp}>
      <Header />
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
