import React from "react";

import logo from "./../assets/image/brand/logo.svg";
import imigongo from "./../assets/image/img/imigongo.svg";
import scroll from "./../assets/image/icon/chevron-down.svg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        <div className="imigongo">
          <img src={imigongo} alt="Umugongo" />
        </div>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Inzozi Logo" />
          </div>
          <div className="content">
            <h2>We are happy to make you happier.</h2>
            <hr className="line" />
            <span>see what we have in store for you</span>
          </div>
          <a href="#explore" className="scroll">
            <span><img src={scroll} alt="chevron-down" /></span>
            <span className="text">Scroll down</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
