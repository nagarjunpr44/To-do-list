import React from "react";
import Todo from "./Todo";
const Todolist = ({ todos, settodos,filteredtodos }) => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredtodos.map((todo) => (
            <Todo
              text={todo.text}
              settodos={settodos}
              key={todo.id}
              todo={todo}
              todos={todos}
              filteredtodos={filteredtodos}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todolist;
