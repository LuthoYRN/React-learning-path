import React from "react";

const UserCard = ({name,component}) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">
          {component}
        </div>
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>
        Add Friend
      </div>
    </div>
  );
};

export default UserCard;
