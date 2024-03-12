
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

import './App.css';

import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Header from './component/Header';
import Footer from './component/Footer';
const App = () => {
  const [todo, setTodo] = useState({
    id:'',
    title:'',
    complete:false,
  });
  const [arr, setArr] = useState([])
  const [editingTodo, setEditingTodo] = useState(null); 
// const addTodoInput =useRef(null)
  const storedArr = JSON.parse(localStorage.getItem('todos'))
  useEffect(() =>{
if(storedArr){
  setArr(storedArr)
}
},[])
  
  useEffect(()=> {
    localStorage.setItem('todos',JSON.stringify(arr))
  }, [arr]);
const addTodoHandler =() =>{
  setArr([...arr, todo]);
  setTodo({id:'' , title:''});
}
const handleDelete =(id) =>{
  const newArr = arr.filter((item) =>(item.id !==id))
  setArr(newArr)
}
  
  return  (
    <>
    <Header/>
  
  <input
  className= "box1 bg-success-subtle border-0 rounded-pill "
  type= 'text'
  placeholder='Enter your todo'
  
  value={editingTodo ? editingTodo.title : todo.title}
  onChange={(e) => setTodo({id: Math.random(),title:e.target.value})}
   onKeyDown={(event)=>{
    if(event.key ==="Enter"){
      addTodoHandler()
    }
   }}
  />
  <Button variant="success" className= "box2 rounded-pill" onClick= {() => setArr([...arr, todo])
  
  }> Add todo </Button>
  
  <ListGroup className='list'> 
{arr.map((item) => (
  <ListGroupItem key={item.id} >
  <FontAwesomeIcon icon={faEdit} className='icons ms-2 'onClick={() => setEditingTodo(item)} />
  
  <FontAwesomeIcon icon={faTrash} className='icon ms-2 ' onClick={() => handleDelete(item.id)} />
   <input type='checkbox' checked={item.complete} onChange={()=>{
    item.complete =!item.complete
   }}/>
{item.title}

  
</ListGroupItem>
))}
  </ListGroup>
  
  <Footer/>
   </>
    )
}
export default App;
