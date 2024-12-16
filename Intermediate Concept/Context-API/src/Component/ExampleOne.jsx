import React from 'react'
import { useContext } from 'react'
import { Data1, Data2 } from '../App'
const ExampleOne = () => {
    const username = useContext(Data1);
    const age = useContext(Data2);

  return (
    <div>
        {/* <Data1.Consumer>
            {(name) => {
                return(
                    <Data2.Consumer>
                        {(age) => {
                            return (
                                <p>My name is {name} and I am {age} years old. </p>
                            )
                        }}
                    </Data2.Consumer>
                )
            }}
        </Data1.Consumer> */}
        <h1>My name is : {username}. I am {age} years old. -- one</h1>
    </div>
  )
}

export default ExampleOne 