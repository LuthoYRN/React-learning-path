import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../reducers/rootSlice";

const Card = () => {
  const { user } = useParams();
  const [card, setCard] = useState({});
  const { cards } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteCard({ id: card.id }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const foundCard = cards.find((c) => c.title === user);

    if (foundCard) {
      setCard(foundCard);
    } else {
      navigate("/contact");
    }
  }, [user, cards]);

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{card.title}</h3>
      <p>{card.body}</p>
      <button className="ui primary right floated button" onClick={handleClick}>
        DELETE
      </button>
    </div>
  );
};

export default Card;
