import React from "react";
import northernPic from "./assets/NorthernHemisphere.jpg";
import southernPic from "./assets/SouthernHemisphere.jpg";
import "./Hemisphere.css";
const hemisphereConfig = {
  Northern: { text: "It is northern hemisphere", picture: northernPic },
  Southern: { text: "It is southern hemisphere", picture: southernPic },
};
const Hemisphere = ({ latitude }) => {
  const hemi = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemi];
  return (
    <div className={hemi}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt=""></img>
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};
export default Hemisphere;
