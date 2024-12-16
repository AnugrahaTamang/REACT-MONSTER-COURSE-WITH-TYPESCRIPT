import React, { useEffect, useState } from 'react'

const Examplethree = () => {
    const [name, setname] = useState(() => {
        const savedName = localStorage.getItem('name');
        return savedName;
    })
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
        return savedName ? JSON.parse(savedName) : "";
    }, [name])
    const handleChange = (event) => {
        setname(event.target.value);
    }
    const ClearOne = () => {
        setname("");
    }
   return(
    <>
    <p>Name: {name}</p>
    <input type="text" value={name} placeholder='Enter your name' onChange={handleChange} />
    <button onClick={ClearOne}>Clear</button>
    </>
   )
}

export default Examplethree