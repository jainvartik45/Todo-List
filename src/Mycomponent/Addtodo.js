import React from 'react'
import { useState } from 'react';

export const Addtodo = (props) => {
    
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState("");


    const submit =(e)=>{
        e.preventDefault();
        if(!title || !task || !deadline){
            alert("Each field is Mandatory")
        }
        else{
        props.addtodo(title,task,deadline);
        setTitle();
        setTask("");
        setDeadline("");

        }
    }



  return (
    <div className="container my-3" >
        <h3 className="text-center">Add a Todo</h3>
        <form onSubmit={submit}>

         <p class="form-label">Gender</p> 
         <div class="input-group mb-3"  value={title} onChange={(e)=>(setTitle(e.target.value))}>
  <label class="input-group-text" for="inputGroupSelect01">Options</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="Boy">Boy</option>
    <option value="Girl">Girl</option>
    <option value="Other">Other</option>
  </select>
</div>
       
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Task</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={task}  onChange={(e)=>(setTask(e.target.value))} ></textarea>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Deadline</label>
    <input type="text" value={deadline}  onChange={(e)=>(setDeadline(e.target.value))} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-success">Add Todo</button>
</form>
    </div>
  )
}
// value={title} onChange={(e)=>(setTitle(e.target.value))}
// value={task}  onChange={(e)=>(setTask(e.target.value))} 