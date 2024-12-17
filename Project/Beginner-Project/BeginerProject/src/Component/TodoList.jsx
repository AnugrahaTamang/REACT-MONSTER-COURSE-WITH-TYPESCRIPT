import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [data, setdata] = useState([]);
    const [inputvalue, setinputvalue] = useState("");
    const generateId = () => Math.floor(Math.random() * 100);
    const handleSubmit = () => {
        setdata((data) => data.concat({
            text: inputvalue,
            id: generateId(),
        }))
        setinputvalue("");
    }
    const removeTodo = (id) => {
        setdata((data) => data.filter((t) => t.id !== id))
    }
  return (
    <div>
        <h1>Simple Todo List</h1>
        <input type="text" value={inputvalue} onChange={(e) => setinputvalue(e.target.value)} placeholder='Add Todo'/>
        <button onClick={handleSubmit}>Submit</button>
        <ul>
            {data.map(({text, id}) => (
                <li key={id}>
                    <span>Text: {text}</span>
                    <button onClick={() => removeTodo(id)}>   X</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList