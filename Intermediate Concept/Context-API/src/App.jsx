
import { createContext } from 'react'
import ExampleOne from './Component/ExampleOne';
export const Data1 = createContext();
export const Data2 = createContext();
function App() {
  const name = "Anugraha Tamang";
  const age = 22;
  return (
    <>
    <Data1.Provider value={name}>
      <Data2.Provider value={age}>
        <ExampleOne/>
      </Data2.Provider>
    </Data1.Provider>
    </>
  )
}

export default App
