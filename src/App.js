import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import "./index.css";

const App = () => {
  return (
    <div className="App">
        <div className="ui raised very padded text container segment">
          <Navbar />
          <TodoList />
        </div>
    </div>
  );
};

export default App;
