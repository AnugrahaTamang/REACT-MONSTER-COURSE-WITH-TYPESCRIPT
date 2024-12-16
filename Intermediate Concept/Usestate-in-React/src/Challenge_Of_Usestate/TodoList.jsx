import React, { useState } from 'react'

const TodoList = () => {
    const [data, setdata] = useState([]);
    const [name, setname] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()){
            setdata([...data, name]);
            setname("");
        }
    }
    const handleChange = (e) => {
        setname(e.target.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} placeholder='Add Item'/>
            <button type='submit'>Add Item</button>
        </form>
        <ul>
            {data.map((item, index) => {
               return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default TodoList