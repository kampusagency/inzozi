import React from "react";

import phone from "./../assets/image/icon/phone.svg";
import mail from "./../assets/image/icon/email.svg";
import scroll from "./../assets/image/icon/chevron-down.svg";

import safari from './../assets/image/img/animal.png'
import { FaEnvelope, FaPhone } from "react-icons/fa6";

function Animal() {
  return (
    <>
      <div className="animal">
        <div className="container">
          <div className="content">
            <div className="text">
              <div>
                <h2>Your dream African Safari</h2>
                <hr className="line" />
                <span>it is more than just a holiday</span>
              </div>
              <div className="action">
                <a className="btn">get in touch with us:</a>
                <div className="contact">
                  <a href="tel:250788565515">
                    {/* <img src={phone} alt="Phone" /> */}
                    <span><FaPhone/></span>
                    <span>+250 788 565 515</span>
                  </a>
                  <a href="mailto:dinahkezio@gmail.com">
                    {/* <img src={mail} alt="Mail" /> */}
                    <span><FaEnvelope/></span>
                    <span>dinahkezio@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="img">
              <img src={safari} alt="Safaris" />
            </div>
          </div>
        </div>
        <a href="#" className="scroll">
          <img src={scroll} alt="Scroll-down" />
        </a>
      </div>
    </>
  );
}

export default Animal;
