import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { useTheme } from "./contexts/ThemeContext";
import "./index.css";

const App = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          className="ui button primary"
          onClick={toggleTheme}
        >
          Toggle theme
        </button>
        <Navbar />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
