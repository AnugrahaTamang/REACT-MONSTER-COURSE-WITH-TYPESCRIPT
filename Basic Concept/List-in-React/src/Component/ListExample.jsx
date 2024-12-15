import React from 'react'

const ListExample = () => {
    const data = [
        {name: "anugraha tamng",
            age: 32,
            location: "USA"
        },
        {name: "bJ",
            age: 33,
            location: "KOREA"
        },
        {name: "RAMIT",
            age: 34,
            location: "JAPAN"
        }
    ]
  return (
    <div>
      {data.map(({name,age,location}) => {
        return(
            // <ul key={Math.random()}>
            //     <li>name : {val.name}</li>
            //     <li>age: {val.age}</li>
            //     <li>location: {val.location}</li>
            // </ul>
            //Another way
            <ul key={Math.random()}>
                <li>{name}</li>
                <li>{age}</li>
                <li>{location}</li>
            </ul>
        )
      })}
    </div>
  )
}

export default ListExample