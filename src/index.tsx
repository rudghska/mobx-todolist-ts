import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import TodoStore from './store/todoStore';

const todoStore: TodoStore = new TodoStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider todoStore={todoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
