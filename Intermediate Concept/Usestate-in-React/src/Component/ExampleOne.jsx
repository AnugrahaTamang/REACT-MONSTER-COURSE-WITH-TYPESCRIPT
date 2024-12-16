import React from 'react'
import { useInsertionEffect } from 'react';
import { useState } from 'react'

const ExampleOne = () => {
    const [data, setdata] = useState(0);
    const Increment = ()  => {
        setdata(data + 1);
    }
    const Decrement = () =>{
        setdata(data -1)
    }
    const [name, setname] = useState("Anugraha")
    const ChangeName = () => {
        setname("Amisha Tamang")
    }
  return (
    <div>
        <p>Data : {data}</p>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <p>Name: {name}</p>
        <button onClick={ChangeName}>ChangeName</button>
    </div>
  )
}

export default ExampleOne