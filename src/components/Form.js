import React from 'react'

const Form = ({inputText,setInputText,todos,settodos,setstatus}) => {
  const inputTextHandler=(e)=>{
    setInputText(e.target.value)
  }
  const submitTodoHandler=(e)=>{
  e.preventDefault();
  settodos([
    ...todos,
    {text:inputText,Completed:false,id:Math.random()*1000}
  ])
  setInputText("");
  }
  const statusHandler=(e)=>{
setstatus(e.target.value);
  }
  return (
    <>
    <form >
        <input value={inputText} onChange={inputTextHandler} type="text"  className='todo-input'/>
        <button className='todo-button' type='submit'onClick={submitTodoHandler}>
        <i className='fas fa-plus-square'></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className='filter-todo'>
                <option value="All">All</option>
                <option value="Completed" >Completed</option>
                <option value="uncompleted" >Uncompleted</option>
            </select>
        </div>
    </form>
    </>
  )
}

export default Form