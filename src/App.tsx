import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { Todo, ToggleTodoItem, AddTodoItem } from './types';

const initialTodos: Array<Todo> = [
  { content: "Write a todo applicaton", completed: false,},
  { content: "Eat scone", completed: true,}
]

const container = {
  margin: '0 auto',
  width: '200px',
  }

function App() {
  const [ todos, setTodos ] = useState(initialTodos);

  const toggleTodoItem: ToggleTodoItem = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodoItem: AddTodoItem = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  return (
    <div style={container}>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodoItem={toggleTodoItem}/>
      <TodoForm addTodoItem={addTodoItem} />
    </div>
  );
}

export default App;
