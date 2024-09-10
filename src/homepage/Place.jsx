import React from "react";

import phone from "./../assets/image/icon/phone.svg";
import mail from "./../assets/image/icon/email.svg";
import scroll from "./../assets/image/icon/chevron-down.svg";

import place from './../assets/image/img/animal.png'

function Place() {
  return (
    <>
      <div className="place">
        <div className="container">
          <div className="content">
            <div className="text">
              <div>
                <h2>Your dream <br /> African Safari</h2>
                <hr className="line" />
                <span>it is more than just a holiday</span>
              </div>
            </div>
            <div className="img">
              <img src={place} alt="Safaris" />
            </div>
          </div>
        </div>
        <p className="title">Find us here</p>
      </div>
    </>
  );
}

export default Place;
