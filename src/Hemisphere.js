import React from "react";
import northernPic from "./assets/NorthernHemisphere.jpg";
import southernPic from "./assets/SouthernHemisphere.jpg";

const hemisphereConfig = {
  Northen: { text: "It is northern hemisphere", picture: northernPic },
  Southern: { text: "It is southern hemisphere", picture: southernPic },
};
const Hemisphere = ({ latitude }) => {
  const hemi = latitude > 0 ? "Northen" : "Southern";
  const { text, picture } = hemisphereConfig[hemi];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "centers",
      }}
    >
      <img src={picture} alt=""></img>
    </div>
  );
};
export default Hemisphere;
