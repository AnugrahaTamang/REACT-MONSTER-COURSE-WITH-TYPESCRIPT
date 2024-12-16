import React, { useEffect, useState } from 'react'

const Two = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        async function GetItem(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const dataOne = await response.json();
            setdata(dataOne);
        }
        GetItem();
    }, [])
  return (
    <div>
        <h1>First Post Title: </h1>
        {data.length > 0 ? <h2>{data[1].title}</h2> : <p>loading....</p>}
    </div>
  )
}

export default Two