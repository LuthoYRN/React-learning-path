import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const TodoList = () => {
  const { isDarkTheme, lightTheme, darkTheme, toggleTheme } = useTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: "140px",
        textAlign: "center",
      }}
    >
      <p className="item">Submit concept pitch</p>
      <p className="item">Write NVP Test</p>
      <p className="item">Write reflection essay</p>
      <button className="ui button primary" onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  );
};
export default TodoList;
