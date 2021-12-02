import React, { ChangeEvent, Component } from 'react';
import './App.css';
import todos from './api/todos';
import { TodoList } from './components/TodoList';
import { Button, TextField } from '@mui/material';
import { Todos } from './types/Todos';

interface State {
  title: string,
  description: string,
  preparedTodos: Todos[],
}

class App extends Component<any, State> {
  state: State = {
    title: '',
    description: '',
    preparedTodos: [],
  };

  componentDidMount() {
    const savedTodosString = localStorage.getItem('todos');

    let savedTodos: Todos[] = [];

    if(savedTodosString) {
      savedTodos = JSON.parse(savedTodosString) as Todos[];
    }

    this.setState(savedTodos.length && !this.state.preparedTodos.length
      ? { preparedTodos: savedTodos }
      : { preparedTodos: todos }
    );
  
  }

  deleteTodo = (id: number) => {
    this.setState(state  => { 
      const updatedTodos = state.preparedTodos.filter(todo => todo.id !== id);

      localStorage.setItem('todos', JSON.stringify(updatedTodos));

      return {
        preparedTodos: updatedTodos
      }
    })
  }

  completeTodo = (id: number) => {
    this.setState(state  => {
      const updatedTodos = state.preparedTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }

        return todo;
      });

      localStorage.setItem('todos', JSON.stringify(updatedTodos));

      return {
        preparedTodos: updatedTodos,
      }
    })
  }

  handleChange = ({
    target
  }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    this.setState({ [name]: value } as any);
  };

  submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.state.description.trim().length > 0 && this.state.title.trim().length > 0) {
      const newTodo = {
        id: Date.now(),
        title: this.state.title,
        completed: false,
        description: this.state.description,
      };
  
      this.setState((state) => {
        localStorage.setItem('todos', JSON.stringify([...state.preparedTodos, newTodo]));

        return ({
          preparedTodos: [...state.preparedTodos, newTodo],
          title: '',
          description: '',
        });
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Todo App</h1>
        <form className="input_form" onSubmit={this.submit}>
          <TextField
            type="text"
            value={this.state.title}
            name="title"
            id="title"
            onChange={this.handleChange}
            className="input"
            required
            variant="outlined"
            label="Title"
          />
          <TextField
            type="text"
            value={this.state.description}
            name="description"
            id="description"
            onChange={this.handleChange}
            className="input"
            required
            variant="outlined"
            label="Description"
          />
          <Button
            type="submit"
            variant="contained"
            className="button_submit"
          >
            Add todo
          </Button>
        </form>
        <div className="todos_list">
          {this.state.preparedTodos.length
            ? (
              <>
                <h2 className="todos_title">Todos</h2>
                <TodoList
                  preparedTodos={this.state.preparedTodos}
                  deleteTodo={this.deleteTodo}
                  completeTodo={this.completeTodo}
                />
              </>
            )
            : <h2>No todos</h2>}
        </div>
      </div>
    );
  }
}

export default App;
