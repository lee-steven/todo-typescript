import React, { FormEvent, ChangeEvent, useState } from 'react'
import { AddTodoItem, Todo } from './types';

interface TodoFormProps{
    addTodoItem: AddTodoItem;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodoItem }) => {
    const [ content, setContent ] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(content === '') return; // prevent submit if content empty
        const newNote: Todo = {
            content: content,
            completed: false,
        }
        addTodoItem(newNote);
        setContent('');
    }

    return(
        <React.Fragment>
            <form>
                <input type="text" placeholder="Add a note..." value={content} onChange={handleChange} />
                <button type="submit" onClick={handleClick}>Add</button>
            </form>
        </React.Fragment>
    )
}