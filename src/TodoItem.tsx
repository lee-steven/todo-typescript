import React from 'react';
import { Todo, ToggleTodoItem } from './types';

interface TodoItemProps {
    todo: Todo;
    toggleTodoItem: ToggleTodoItem;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodoItem }) => {
    return(
        <li style={{ listStyleType: 'none', listStylePosition: 'inside', margin: 0, padding: 0,  }}>
            <label style={{ textDecoration: todo.completed ? 'line-through' : undefined }}>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoItem(todo)} />{todo.content}
            </label>
        </li>
    )
}