import React from 'react'
import Expression from './Component/Expression'
import ListExample from './Component/ListExample'
import PropsChallenge from './Component/PropsChallenge'

const App = () => {
  return (
    <div>
      <Expression/>
      <ListExample/>
      <PropsChallenge img="https://avatars.githubusercontent.com/u/166694801?v=4" name = "Anugraha"
      age = {22} location = "kathmandu" hobbies = {['volleyball', "football", "snoker"]} />
    </div>
  )
}

export default App