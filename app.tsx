import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

class App extends React.Component<any, any> {
  state = {
    title: '',
    userName: '',
    preparedTodos: todos.map(item => (
      {
        ...item,
        user: users.find(user => user.id === item.userId) || null,
      }
    )),
  };

  handleChange = (event: any) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  submit = (event: any) => {
    event.preventDefault();
    const newTodo = {
      userId: users.find(user => user.name === this.state.userName)!.id,
      id: this.state.preparedTodos.length + 1,
      title: this.state.title,
      completed: false,
      user: users.find(user => user.name === this.state.userName) || null,
    };

    this.setState((state: any) => {
      return ({
        preparedTodos: [...state.preparedTodos, newTodo],
        title: '',
        userName: '',
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Add todo form</h1>
        <form>
          <label htmlFor="title">
            Title
            <input
              type="text"
              value={this.state.title}
              name="title"
              id="title"
              onChange={this.handleChange}
            />
          </label>
          <select
            name="userName"
            id="user"
            value={this.state.userName}
            onChange={this.handleChange}
          >
            <option>Choose a user</option>
            {users.map(user => {
              return (<option value={user.name} key={user.name}>{user.name}</option>);
            })}
          </select>
          <button
            type="submit"
            onClick={this.submit}
          >
            Add
          </button>
        </form>
        <h2>Todos</h2>
        <TodoList preparedTodos={this.state.preparedTodos} />
      </div>
    );
  }
}

export default App;