import React from 'react'
import { useReducer } from 'react'

const ExampleOne = () => {
    const [state, dispatch] = useReducer(reducer, intialValue);
    const intialValue = {count: 0};
    const reducer = (state, action) => {
        switch(action.type){
            case "increment":
                return {...state, count: state.count + 1};
            case "decrement":
                return {...state, count: state.count - 1};
            case "reset":
                return {...state, count: 0};
            default:
                return state;
        }
    };

  return (
    <div>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Increment</button>
        <button onClick={() => dispatch({type: "reset"})}>Increment</button>
        <p>Count: {state.count}</p>

    </div>
  )
}

export default ExampleOne