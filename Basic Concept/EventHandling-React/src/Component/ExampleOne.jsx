import React from 'react'
const Incre = () => {
    let num = 0;
    console.log(num + 1)
}
const Decre = () => {
    let num = 1;
    console.log(num -1)
}
const ExampleOne = () => {
  return (
    <div>
       <button onClick={Incre}>Increment</button>
       <button onClick={Decre}>Decrement</button>
    </div>
  )
}

export default ExampleOne