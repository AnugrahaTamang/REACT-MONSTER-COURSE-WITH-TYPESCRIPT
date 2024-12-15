import React from 'react'

const ChallengeThree = () => {
    const day = "morning"
    if (day == "morning"){
        return <h1>Good Morning</h1>
    }
    else if (day == "afternoon"){
        return <h1>Good afternoon</h1>
    } 
    else if (day == "evening"){
        return <h1>Good evening</h1>
    }
    else{
        return <h1>Invalid Day value enter</h1>
    }
}

export default ChallengeThree