import React from "react";

import phone from "./../assets/image/icon/phone.svg";
import mail from "./../assets/image/icon/email.svg";
import scroll from './../assets/image/icon/chevron-down.svg'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

function Explore() {
  return (
    <>
      <div className="explore" id="explore">
        <div className="container">
          <div className="content">
            <div>
              <h2>Explore the world with an unmatched experience with us</h2>
              <hr className="line" />
              <span>luxury, adventure and memories await</span>
            </div>
            <div className="action">
              <a href="" className="btn">
                get in touch with us
              </a>
              <div className="contact">
                <a href="tel:250788565515">
                  <span><FaPhoneAlt/></span>
                  <span>+250 788 565 515</span>
                </a>
                <a href="mailto:dinahkezio@gmail.com">
                  <span><FaEnvelope/></span>
                  <span>dinahkezio@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="scroll"><img src={scroll} alt="scroll-down" /></a>
        </div>
      </div>
    </>
  );
}

export default Explore;
