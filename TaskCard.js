import React from 'react'
import './TaskCard.css'
import style from'./TaskCard.module.css'
const TaskCard = (props) => {
  return (
    <>
    <div className='taskcard'>
     <li key={props.task.id} className= {props.task.completed ? 'completed' : 'incomplete'}>
    <span className={style.title}>{props.task.id} - {props.task.name} -{props.randomValue} </span>
    <button onClick={() => props.handleEvent(props.task.id)}>Delete</button>
     </li>
     </div>
    </>
  )
}

export default TaskCard