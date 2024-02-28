// import logo from './logo.svg';
import React, { useState } from 'react'
const App = () => {
  const [todo, setTodo] = useState('')
  const [arr, setArr] = useState([])

  return (
    <>
  <input
  type= 'text'
  placeholder='Enter your todo'
  value= {todo}
  onChange={(e) => setTodo(e.target.value)}
  />
  <button onClick= {() => setArr([...arr, todo])}>Add todo</button>
  <button 
  onClick={ () => [
console.log(arr)
  ]}>
    array
  </button>

   </>
    )
}
export default App
