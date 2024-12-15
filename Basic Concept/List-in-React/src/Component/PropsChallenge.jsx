import React from 'react'

const PropsChallenge = ({img, name, location, hobbies, }) => {
  return (
    <div>
        <img src={img} alt={name} />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        {/* {hobbies.map((item) => {
            return (
                <li key={Math.random()}>{item}</li>
            )
        })} */}
        <p>Hobbies: {hobbies[0]}</p>
    </div>
  )
}

export default PropsChallenge