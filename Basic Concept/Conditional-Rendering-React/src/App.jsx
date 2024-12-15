import React from 'react'
import ChallengeOne from './Component/ChallengeOne'
import UserStatus from './Component/ChallengeTwo'
import ChallengeThree from './Component/ChallengeThree'
const ValidPassword = () => <h1>This is Valid Password</h1>
const InvalidPassword = () => <h1>This is InValid Password</h1>
const Password = ({isValid}) => {
  if(isValid){
    return <ValidPassword/>
  }
  return <InvalidPassword/>
}

const App = () => {
 const item = ["banana", "apple", " orange", "grapes"];
  return (
    <div>
      <Password isValid={false}/>
      {item.length>0 && <h1>item length is {item.length}</h1>}
      <ul>
        <h4>Products: </h4>
        {item.map((val) => <li key={Math.random()}>{val}</li>)}
      </ul>
      <ChallengeOne/>
      <UserStatus LogIn={true} isAdmin={false}/>
      <ChallengeThree/>
    </div>
  )
}

export default App