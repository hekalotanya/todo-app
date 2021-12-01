import React from 'react';
import { Todos } from '../types/Todos';
import './TodoInfo.css';
import cn from 'classnames';

type Props = {
  todo: Todos,
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <div className={cn("todo", {
    checked: todo.completed
  })}>
    <h2>{todo.title}</h2>
    <span>{todo.description}</span>
  </div>
);
