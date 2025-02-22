import React, { useState } from "react";

const AddToDo = ({ addToDo }) => {
  const [todo, setToDo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(todo);
    setToDo("");
  };
  const handleChange = (e) => {
    setToDo(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add task: </label>
      <input
        type="text"
        style={{
          border: "none",
        }}
        value={todo}
        onChange={handleChange}
      />
      <button type="submit" className="ui button primary">
        Add
      </button>
    </form>
  );
};

export default AddToDo;
