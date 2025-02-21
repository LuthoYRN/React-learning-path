import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Contact = () => {
  const { cards } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  return (
    <div>
      {cards.map((card) => {
        return (
          <div
            className="ui raised very padded text container segment"
            style={{ marginTop: "80px" }}
            key={card.id}
          >
            <Link to={`/card/${card.title}`} className="ui header">
              {card.title}
            </Link>
            <p>{card.body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Contact;
