import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    const [latitude, setLatitude] = React.useState(null);
    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude)
            },
            (error) => console.log(error)
        );
    },[latitude])
  return <div>latitude: {latitude}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
