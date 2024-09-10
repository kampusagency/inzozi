// Modal.js
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";
import "./../styles/component.scss"; 

const Modal = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [message, setMessage] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSend = (type) => {
    if (type === "whatsapp") {
      if (message.trim() === "") return;
      const phoneNumber = "250788565515";
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    } else if (type === "email") {
      const email = "dinahkezio@gmail.com";
      const subject = "Message from Inzozi Website";
      const body = encodeURIComponent(
        `Thank you and welcome to the platform!\n\nMessage: ${message}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
    setMessage("");
    setSelectedOption(null);
    onClose();
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  if (!isOpen) return null;

  return (
    <div className="intouch">
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            <FaTimes/>
          </button>
          {selectedOption ? (
            <>
              <button className="back-btn" onClick={handleBack}>
                <FaArrowLeft /> Back
              </button>
              <div className="modal-chat">
                {selectedOption === "whatsapp" ? (
                  <>
                    <div className="chat-bubble">
                      <p>
                        Hello and welcome to Inzozi Travel and Tours! 🌍✈️{" "}
                        <br /> We’re here to help with your travel plans. How
                        can we assist you today?
                      </p>
                    </div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                    />
                    <button
                      className="send-button"
                      onClick={() => handleSend("whatsapp")}
                    >
                      <FaPaperPlane /> Send via WhatsApp
                    </button>
                  </>
                ) : selectedOption === "email" ? (
                  <>
                    <div className="chat-bubble">
                      <p>
                        Hi, Thanks for visiting! We're here to assist with your
                        travel needs — just reply to this email, and we'll get
                        back to you shortly.
                      </p>
                    </div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                    />
                    <button
                      className="send-button"
                      onClick={() => handleSend("email")}
                    >
                      <FaPaperPlane /> Send via Email
                    </button>
                  </>
                ) : selectedOption === "call" ? (
                  <p>
                    Click <a href="tel:+250788565515">here</a> to call us.
                  </p>
                ) : null}
              </div>
            </>
          ) : (
            <div className="modal-options">
              <button onClick={() => handleOptionClick("call")}>
                <FaPhoneAlt /> Call Us
              </button>
              <button onClick={() => handleOptionClick("whatsapp")}>
                <FaWhatsapp /> Chat on WhatsApp
              </button>
              <button onClick={() => handleOptionClick("email")}>
                <FaEnvelope /> Send an Email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
