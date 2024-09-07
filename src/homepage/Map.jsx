import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa"; // Importing icons from react-icons
import logo from "./../assets/image/brand/logo.svg"; // Importing the logo
import { MdOutlineAccessTime } from "react-icons/md";

function Map() {
  return (
    <>
      <div className="map">
        <div className="map-container">
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4533404253475!2d30.101451473505513!3d-1.9728599367588784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7106526908b%3A0x3a6cae8f668cd945!2sInzozi%20Tours%20%26%20Travels!5e0!3m2!1sen!2snl!4v1724841790764!5m2!1sen!2snl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="info-card">
            <div className="liner"></div>
            <div className="card-logo">
              <img src={logo} alt="Company Logo" />
            </div>
            <div className="card-details">
              <div className="line">
                <p className="title">
                  <FaWhatsapp /> Mobile phone
                </p>
                <a href="tel:250788565515">(250) 788 565 515</a>
              </div>
              {/* <div className="line">
                <p className="title">
                  <FaWhatsapp /> WhatsApp
                </p>
                <a href="https://wa.me/250788565515">(250) 788 565 515</a>
              </div> */}
              <div className="line">
                <p className="title">
                  <MdOutlineAccessTime /> Working hours
                </p>
                <a> 07:00AM - 6:00PM</a>
                <span>monday - friday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
