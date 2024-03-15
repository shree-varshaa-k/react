import  './AddTask.css'
import { useState } from 'react';
export const AddTask = () => {
    const[taskValue, setTaskValue]= useState('');
    const [progress, setprogress]= useState(false);
    const handleReset =() =>{
setTaskValue('');
setprogress(false);
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        const task ={
            id :Math.floor(Math.random () *10000),
            name :taskValue,
            completed: Boolean(progress)
        }
        console.log(typeof(Boolean(progress)))
        console.log(task);
    }
    // const handleChange = (event) =>{
        
    //         console.log(event.target.value);
    //     setTask(event.target.value);
    // }
  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="">Task :</label> */}
            <input onChange={(event) => {setTaskValue(event.target.value)}} type="text" name='task' id='task' placeholder='Add Task' autoComplete='off' value={taskValue}/>
            <select onChange={(event) => {setprogress(event.target.value)}}>
                <option value={false}>pending</option>
                <option value ={true}>completed</option>
            </select>
            <button type="submit">Add task</button>
            <span onClick={handleReset} className='reset'>Reset</span>
        </form>
        <p>{taskValue}</p>
    </section>
  )
}
