import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import ToDoContextProvider from "./contexts/ToDoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <ToDoContextProvider>
        <App />
      </ToDoContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>
);
