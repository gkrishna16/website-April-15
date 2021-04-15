import React from "react";
import image from "../assets/facebook.png";

const AfterHome = () => {
  return (
    <>
      <img src={image} alt="abstract background" />
      <div className="circle"></div>
      <div className="container" id="glass">
        <h2 className="seq">Hello everyone</h2>
        <p className="seq">Let's go ahead and get this show on the road.</p>
      </div>
      <h1> Glassmorphism Realized </h1>;
    </>
  );
};

export default AfterHome;
