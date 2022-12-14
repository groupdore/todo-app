import React, {FunctionComponent as FC, useState, FormEvent} from 'react'

const Form : FC = () => {""
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!todo) {
            return window.alert("Please enter a todo");
        }
        else {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' value={todo} onChange= {(e) => setTodo(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
    )
}

export default Form