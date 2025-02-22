import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { logIn, isLoggedIn } = useAuth();

  const authStatus = isLoggedIn ? "Logged In" : "Logged Out";

  return (
    <nav
      style={{
        textAlign: "center",
        color: theme.text,
        backgroundColor: theme.background,
        height: "120px",
      }}
    >
      <h2
        style={{
          color: theme.text,
          textAlign: "center",
        }}
      >
        Impact Academy
      </h2>
      <p
        style={{
          textAlign: "center",
        }}
        onClick={logIn}
      >
        {authStatus}
      </p>
      <div className="ui three buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  );
};
export default Navbar;
