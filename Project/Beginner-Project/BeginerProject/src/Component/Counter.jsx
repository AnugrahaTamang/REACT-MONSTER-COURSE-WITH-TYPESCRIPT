import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count, setcount] = useState(0);
    const increment  = () => {
        setcount(count + 1);
    }
    const decrement = () => {
        setcount(count -1);
    }
  return (
    <>
            <h1 className='number'>{count}</h1>
       
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter