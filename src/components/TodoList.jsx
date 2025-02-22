import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useToDo } from "../contexts/ToDoContext";
import AddToDo from "./AddToDo";

const TodoList = () => {
  const { isDarkTheme, lightTheme, darkTheme } = useTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { todos, addToDo, removeToDo } = useToDo();
  const handleRemoveToDo = (id) => {
    removeToDo(id);
  };
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: "140px",
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo) => (
          <p
            id={todo.id}
            key={todo.id}
            onClick={(e) => handleRemoveToDo(e.target.id)}
          >
            {todo.text}
          </p>
        ))
      ) : (
        <p>You have no todos</p>
      )}
      <AddToDo addToDo={addToDo} />
    </div>
  );
};
export default TodoList;
