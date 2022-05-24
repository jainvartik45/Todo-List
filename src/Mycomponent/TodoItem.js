import React from 'react'

export const TodoItem = ({todo , onDelete}) => {
  return (
    
    <div id="TodoBoxes"> 
    
         <p className="Todos">{todo.title}</p>
        <p  className="Todos">{todo.task}</p>
        <p  className="Todos">{todo.deadline}</p>

        <button className="btn btn-danger" onClick={() =>{onDelete(todo)}}> Delete</button>
    </div>
    
  )
}
