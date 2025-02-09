import React from "react";
import ReactDOM from "react-dom/client";
import profile1 from "./assets/avi.jpeg";
import profile2 from "./assets/josiah_chavula_0.jpg";
import profile3 from "./assets/3a0ba222-dichochi-ramotlou_cmyk.webp";

import SingleComment from "./components/SingleComment";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div
      className="ui comments"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <UserCard
        name={"Lutho Mngqibisa"}
        component={
          <SingleComment
            name={"Lutho Mngqibisa"}
            profile_url={profile1}
            text={"I love coding!"}
            date={"Today at 5:00 pm"}
          />
        }
      />
      <UserCard
        name={"Josiah Chavula"}
        component={
          <SingleComment
            name={"Josiah Chavula"}
            profile_url={profile2}
            text={"Computer Networks is the future!"}
            date={"Today at 5:00 pm"}
          />
        }
      />
      <UserCard
        name={"Dichochi Ramatlou"}
        component={
          <SingleComment
            name={"Dichicho Ramatlou"}
            profile_url={profile3}
            text={"I love Mechatronics!"}
            date={"Today at 5:00 pm"}
          />
        }
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
