import React, { useState } from 'react'

const ShoppingList = () => {
    const [item, setitem] = useState([]);
    const [name, setname] = useState("");
    const [quality, setquality] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !quality) return;
        const newItem = {
            name,
            quality: parseInt(quality),
        };
        setitem((previtem) => [...previtem, newItem]);
        setname("");
        setquality("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Name'/>
            <input type="number" value={quality} onChange={(e) =>setquality(e.target.value)} placeholder='quality'/>
            <button type='submit'>add item</button>
        </form>
        <ul>
            {item.map((data, index) => {
                return <li key={index}>{data.name} - Quality: {data.quality}</li>
            })}
        </ul>
    </div>
  )
}

export default ShoppingList