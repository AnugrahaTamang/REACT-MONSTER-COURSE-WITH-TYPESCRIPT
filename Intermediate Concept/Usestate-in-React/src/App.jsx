import React from 'react'
import ExampleOne from './Component/ExampleOne'
import ExampleTwo from './Component/ExampleTwo'
import Examplethree from './Component/Examplethree'
import TodoList from './Challenge_Of_Usestate/TodoList'
import UserProfile from './Challenge_Of_Usestate/UserProfile'
import ShoppingList from './Challenge_Of_Usestate/ShoppingList'

const App = () => {
  return (
    <div>
      {/* <ExampleOne/>
      <ExampleTwo/>
      <Examplethree/> */}
      <TodoList/>
      <UserProfile/>
      <ShoppingList/>
    </div>
  )
}

export default App