import React from "react";
import Heropic from "../Assets/Images/hero.jpg";

export default function Hero() {
  return (
    <div>
      <div className="hero__container">
        <video className="hero__vid" controls poster={Heropic} />
        <source src={Heropic} type="video" />
      </div>
    </div>
  );
}
