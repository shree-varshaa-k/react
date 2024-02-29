// import logo from './logo.svg';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './App.css';
const App = () => {
  const [todo, setTodo] = useState('')
  const [arr, setArr] = useState([])

  return (
    <>
  <input
  className= "box1"
  type= 'text'
  placeholder='Enter your todo'
  value= {todo.title}
  onChange={(e) => setTodo(e.target.value)}
  />
  <Button variant="success" className= "box2" onClick= {() => setArr([...arr, todo])}>Add todo</Button>
  <div >
{arr.map((item) => (
  <p key={item.id}>{item.title}</p>
))}
  </div>
  

   </>
    )
}
export default App
