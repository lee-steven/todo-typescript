export type Todo = {
    content: string,
    completed: boolean,
}

export type ToggleTodoItem = (selectedTodo: Todo ) => void;

export type AddTodoItem = (todo: Todo) => void;