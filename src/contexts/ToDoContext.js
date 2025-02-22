import { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos([...todos, { id: Math.random(), text: todo }]);
  };
  const removeToDo = (id) => {
    console.log("called");
    setTodos(todos.filter((todo) => todo.id !== Number(id)));
  };
  return (
    <ToDoContext.Provider value={{ todos, removeToDo, addToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};
export default ToDoContextProvider;
export const useToDo = () => useContext(ToDoContext);
