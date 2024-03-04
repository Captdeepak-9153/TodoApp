import React, { useState } from "react";
import Todoitem from "./Todoitem";

function Button() {
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    const inputValue = document.querySelector("input").value.trim();
    if (inputValue !== "") {
      const newTodo = { id: todos.length + 1, value: inputValue };
      setTodos([...todos, newTodo]);
      document.querySelector("input").value = "";
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id) => {
   const  newtodoValue = prompt("Enter your updated todo");
   if (newtodoValue !== "" ) {
   const updatedTodos=  todos.map(todo => {
    if (todo.id === id){
      return{...todo , value: newtodoValue};
    }
    return todo;
   });
   setTodos(updatedTodos);
  }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-full bg-pink-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Add Todo
      </button>
    
      <div>
        {todos.map((todo) => (
          <Todoitem 
          key={todo.id} 
          todoValue={todo.value}
          onDelete={() => handleDeleteTodo(todo.id)}
          onEdit={() => handleEditTodo(todo.id)}  />
        ))}
      </div>
    </div>
  );
}

export default Button;
