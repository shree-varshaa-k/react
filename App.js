
import React, { useEffect, useReducer, useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
import Iconcomponent from './component/Iconcomponent';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Header from './component/Header';
import Footer from './component/Footer';
import Buttoncomponent from './component/Buttoncomponent';
import  {Login}  from './pages/Login';
import { About } from './pages/About';

const todoReducer = (state, action) => {
  if (action.type === 'ADD') {
    return [...state, action.payload];
  } else if (action.type === 'COMPLETE') {
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, complete: !todo.complete };
      } else {
        return todo;
      }
    });
  }
};
const[todos,dispatch ]=useReducer(todoReducer,[])

const App = () => {
  const [todo, setTodo] = useState({
    id:'',
    title:'',
    complete:false,
  });
  const [arr, setArr] = useState([...JSON.parse(localStorage.getItem('todos'))])
 
// const addTodoInput =useRef(null)
//   const storedArr = 
//   useEffect(() =>{
// if(storedArr){
//   setArr(storedArr)
// }
// },[])
  
  useEffect(()=> {
    localStorage.setItem('todos',JSON.stringify(arr))
  }, [arr]);
  // useEffect(()=>{
  //  addTodoInput.current.focus()
  // },[])
const addTodoHandler =() =>{
  setArr([...arr, todo]);
  setTodo({id:'' , title:'',complete: false});
}
const handleDelete =(id) =>{
  const newArr = arr.filter((item) =>(item.id !==id))
  setArr(newArr)
}
const handleEdit =(id) =>{
  const editing = arr.filter((item) => (item.id === id))
  const edited = editing.map(editing => editing.title);
  setTodo({title: edited})
}
  
  return  (

    <>
    
    <Header/>
  
  <input
  className= "box1 bg-success-subtle border-0 rounded-pill "
  type= 'text'
  placeholder='Enter your todo'
  
  value={todo.title}
  onChange={(e) => setTodo({id: Math.random(),title:e.target.value})}
   onKeyDown={(event)=>{
    if(event.key ==="Enter"){
      addTodoHandler()
    }
   }}
  />
 <Buttoncomponent addTodoHandler = {addTodoHandler}/>
 <ListGroup className='list'> 
{arr.map((item) => (
  <ListGroupItem key={item.id} >
  <Iconcomponent item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
   <input type='checkbox' checked={item.complete} onChange={()=>{
    item.complete =!item.complete
   }}/>
{item.title}

  
</ListGroupItem>
))}
  </ListGroup>
  

  
  <Footer/>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<About />}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   </>

    )
}

export default App;
