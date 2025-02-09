import React from "react";

const SingleComment = ({ name, profile_url, date, text }) => {
  return (
    <div className="comment" style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <a href="/" className="avatar">
          <img
            src={profile_url}
            alt="profile-picture"
          ></img>
        </a>
      </div>
      <div
        className="content"
        style={{ display: "flex", flexDirection: "column",marginLeft:"10px" }}
      >
        <div>
          <a href="/" className="author">
            {name}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default SingleComment;
