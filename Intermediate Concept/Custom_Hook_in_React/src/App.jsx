import React from 'react'
import BeforeCustom from './Component/BeforeCustom'
import AfterCustom from './Component/AfterCustom'
import UseID from './Component/UseID';

const App = () => {
  const [data] = AfterCustom("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      {/* <BeforeCustom/> */}
      {/* After the custom hook  */}
      {/* {
       data && data.map((item) => {
          return <p key={item.id}>{item.title}</p>
        })
      } */}
      <UseID/>
    </div>
  )
}

export default App