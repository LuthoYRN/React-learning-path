import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = () => {
  const { user } = useParams();
  const [card, setCard] = useState({});
  const { cards } = useSelector((state) => state.root);

  useEffect(() => {
    setCard(cards.find((card) => card.title === user));
  }, [user, cards]);
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{card.title}</h3>
      <p>{card.body}</p>
    </div>
  );
};

export default Card;
