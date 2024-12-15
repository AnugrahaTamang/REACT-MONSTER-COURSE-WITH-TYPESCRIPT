import React from 'react'
const Weather = (temp) => {
    if (temp<15){
        return <h1>It's cold Outside</h1>
    }
    else if (temp >15 && temp <25){
        return <h1>It's nice outside</h1>
    }
    else{
        return <h1>it's hot outside</h1>
    }
}
const ChallengeOne = () => {
  return (
    <div>
        <Weather temp = {20}/>
    </div>
  )
}

export default ChallengeOne