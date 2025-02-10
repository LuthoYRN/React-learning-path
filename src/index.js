import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Hemisphere from "./Hemisphere";

const App = () => {
  const [latitude, setLatitude] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
      },
      (error) => setErrorMessage(error.message)
    );
  }, [latitude]);
  return (
    <div>
      {errorMessage && !latitude
        ?  errorMessage 
        : !errorMessage && latitude
        ? <Hemisphere latitude={latitude}>
        </Hemisphere>
        : "Loading..."}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
