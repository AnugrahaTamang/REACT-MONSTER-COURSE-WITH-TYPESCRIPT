import React, { useEffect, useState } from 'react'

const BeforeCustom = () => {
    const [data, setdata] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((valone) => setdata(valone));
    }, []);
  return (
    <div>
        <h1>Before Custom Hook </h1>
    {data && data.map((item) => {
        return <p key={item.id}>{item.title}</p>
    })}
    </div>
  )
}

export default BeforeCustom