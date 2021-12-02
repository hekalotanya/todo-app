import React, { FC } from 'react';
import { TodoInfo } from './TodoInfo';
import { Todos } from '../types/Todos';
import './TodoList.css';
import Button from '@mui/material/Button';
import todos from '../api/todos';
import { isPropertySignature } from 'typescript';

type Props = {
  preparedTodos: Todos[],
  deleteTodo: (id: number) => void,
  completeTodo: (id: number) => void,
};

export const TodoList:FC<Props> = ({ 
  preparedTodos,
  deleteTodo,
  completeTodo,
}) => (
  <>
    {preparedTodos.map(todo => (
      <div className="todoWrap" key={todo.id}>
        <TodoInfo todo={todo} />
        <div className="buttons_nav">
          <Button
            variant={todo.completed ? 'outlined' : 'contained'}
            className="button"
            onClick={() => completeTodo(todo.id)}
          >
            {todo.completed ? 'uncomplete' : 'complete'}
          </Button>
          <Button
            variant="contained"
            className="button"
            color="error"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    ))}
</>
)
