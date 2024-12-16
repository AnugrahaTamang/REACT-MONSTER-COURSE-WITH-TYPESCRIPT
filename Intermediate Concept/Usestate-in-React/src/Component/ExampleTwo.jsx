import React, { useState } from 'react'

const ExampleTwo = () => {
    const [randomNum, setrandomNum] = useState(() => Math.floor(Math.random() * 10))
    const randomNumGenerate = () => {
        const num = Math.floor(Math.random() * 10)
        setrandomNum(num);
    }
  return (
    <div>
        <p>Random Number: {randomNum}</p>
        <button onClick={randomNumGenerate}>Generate Random Num</button>
    </div>
  )
}

export default ExampleTwo