import React from 'react'
// import {Button} from 'react-bootstrap/Button';

const Buttoncomponent = ({addTodoHandler}) => {
  return (
    <>
     <button className= "box2 rounded-pill" onClick= {addTodoHandler}> Add Todo </button>
    </>
  )
}

export default Buttoncomponent