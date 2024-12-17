import React from 'react'
import { useId } from 'react'
const UseID = () => {
    const id = useId();
  return (
    <div>
        <label htmlFor={`${id}-name`}>
        <input type="text" placeholder='Enter your name' id={`${id}-name`}/>
        </label>
        <label htmlFor={`${id}-email`}>
        <input type="text" placeholder='Enter your Email' id={`${id}-email`}/>
        </label>
    </div>
  )
}

export default UseID