import React, { useState } from 'react'

const UserProfile = () => {
    const [data, setdata] = useState({
        name: "",
        age: "",
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setdata((prevdata) => (
            {
                ...prevdata,
                [name]: value,
            }
        ));
    }
  return (
    <div>
        <div>
        <label>Name: 
            <input type="text"  value={data.name} name='name' onChange={handleChange} placeholder='Name...'/>
        </label>
        </div>
        <div>
        <label>Age: 
            <input type="number"  value={data.age} name='age' onChange={handleChange} placeholder='Name...'/>
        </label>
        </div>
      <p>Profile Information</p>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  )
}

export default UserProfile