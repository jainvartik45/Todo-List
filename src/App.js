
import './App.css';
import Header from "./Mycomponent/Header";
import {Todos} from "./Mycomponent/Todos";
import {Footer} from "./Mycomponent/Footer";
import { useState } from 'react';
import {Addtodo} from "./Mycomponent/Addtodo";

function App() {

  const addtodo =(title,task,deadline)=>{
      console.log("this is my todo",title,task,deadline);

      const myTodo= {
        title:title,
        task:task,
        deadline:deadline,
      }

      setTodo([...todos,myTodo]);
      console.log(myTodo);
  }

  const onDelete = (todo)=>{
    
    console.log("i am onDelete" , todo);

    setTodo(todos.filter((e)=>{
         return e!==todo;
    }));
  }

  const [todos,setTodo] = useState([]);


  return (
      <>
     

  <Header title="My Todo List"/>
  <Addtodo addtodo={addtodo}/>
  <Todos todos={todos}  onDelete={onDelete}/>
  <Footer/>
</>
  );
}

export default App;
