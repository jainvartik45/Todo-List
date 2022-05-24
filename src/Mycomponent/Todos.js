import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
      
    <div>
       <h2 className="Topic"> Todo List</h2>
       <div id ="Boxes">
       {props.todos.length==0? "No Todos to display" :
       props.todos.map((todo)=>{
      return  <TodoItem todo={todo}  key={todo.sno}  onDelete={props.onDelete}/>
       })
       }
       </div>
    </div>
   
  )
}
