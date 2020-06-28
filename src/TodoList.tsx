import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo, ToggleTodoItem } from './types';

interface TodoListProps{
    todos: Array<Todo>;
    toggleTodoItem: ToggleTodoItem;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodoItem }) => {
    return(
        <React.Fragment>
            <ul style={{ listStyleType: 'none', listStylePosition: 'inside', margin: 0, padding: 0,  }}>
                {todos.map(todo => {
                    return <TodoItem key={todo.content} todo={todo} toggleTodoItem={toggleTodoItem} />
                })}
            </ul>
        </React.Fragment>
    )
}