import React, { useState,useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
function App() {

  useEffect(()=>{
    getLocaltodos();
  },[])

  const [inputText, setInputText] = useState("");
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filteredtodos,setfilteredtodos]=useState([]);

  useEffect(()=>{
   filterhandler();
   savelocal();
  },[todos,status])

  const filterhandler=()=>{

    switch(status){
      case 'Completed':
        setfilteredtodos(todos.filter(todo=>todo.Completed ===true))
        break;
        case 'uncompleted':
        setfilteredtodos(todos.filter(todo=>todo.Completed ===false))
        break;
        default:
          setfilteredtodos(todos);
          break;
    }
  }
  const savelocal=()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  
  const getLocaltodos=()=>{
    if(localStorage.getItem('todos')===null)
    {
      localStorage.setItem("todos",JSON.stringify([]));

    }
    else{
     let todolocal=JSON.parse(localStorage.getItem("todos"))
    settodos(todolocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>To Do-List App</h1>
      </header>
      <Form
        todos={todos}
        settodos={settodos}
        setInputText={setInputText}
        inputText={inputText}
        setstatus={setstatus}
      />
      <Todolist settodos={settodos} todos={todos} filteredtodos={filteredtodos} />
    </div>
  );
}

export default App;
