import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Card = () => {
  const { user } = useParams();
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">Card</h3>
      <p>{loggedUser}</p>
    </div>
  );
};

export default Card;
