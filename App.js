// import logo from './logo.svg';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState({
    id:'',
    title:'',
    
  });
  const [arr, setArr] = useState([])
  

  return (
    <>
  <input
  className= "box1"
  type= 'text'
  placeholder='Enter your todo'
  value= {todo.title}
  onChange={(e) => setTodo({id: Math.random(),title:e.target.value})}
  
  />
  <Button variant="success" className= "box2" onClick= {() => setArr([...arr, todo,localStorage.setItem('todo.title,todo.id')])}>Add todo</Button>
  <Spinner animation="border" variant="primary" />
  
  <div >
{arr.map((item) => (
  <p key={item.id}>{item.title}</p>
))}
  </div>
  

   </>
    )
}


export default App;
