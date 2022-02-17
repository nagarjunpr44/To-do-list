import React from "react";

const Todo = ({ text, todo, todos, settodos }) => {
  const deleteHandler = () => {
    settodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = ()=>
  {
settodos(todos.map((item) =>{
    if(item.id ===todo.id)
    {
        return{
            ...item,Completed:!item.Completed
        }
    }
    return item
}))
  }
  return (
    <>
      <div className="todo">
        <li className={`todo-item ${todo.Completed ?"completed":""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
          {" "}
          <i className="fas fa-check"></i>{" "}
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          {" "}
          <i className="fas fa-trash"></i>{" "}
        </button>
      </div>
    </>
  );
};

export default Todo;
