import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/todoSlice";

function Todo() {
  //   const theme = useSelector((state) => state.theme);
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue) {
      dispatch(addItem(inputValue));
      setInputValue("");
    }
  };
  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add todo</button>
    </>
  );
}

export default Todo;
