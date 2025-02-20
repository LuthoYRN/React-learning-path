import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to={"/card/Alex"} className="ui header">
          Alex
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo.
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to={"/card/Ugur"} className="ui header">
          Ugur
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo.r
        </p>
      </div>{" "}
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to={"/card/William"} className="ui header">
          William
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo.
        </p>
      </div>
    </div>
  );
};
export default Contact;
