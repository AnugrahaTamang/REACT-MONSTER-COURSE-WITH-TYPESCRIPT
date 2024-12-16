import React, { useDebugValue, useEffect, useState } from 'react'

const One = () => {
   const [data, setdata]  = useState(0);
   useEffect(() => {
        console.log("Hello sir");
        document.title = `Count: ${data}`;
   }, [data])
  return (
    <div>
        <p>Data One: {data}</p>
        <button onClick={() => setdata(data + 1)}>add</button>
    </div>
  )
}

export default One