import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
>>>>>>> b255dc9 (기본 UI 세팅)
    </div>
  );
}

export default App;
