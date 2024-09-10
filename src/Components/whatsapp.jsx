import React, { useState } from 'react';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import './../styles/component.scss'; 

function WhatsApp() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = () => {
    if (message.trim() === '') return;

    const phoneNumber = '250788565515';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    setMessage('');
    setIsChatOpen(false);
  };

  return (
    <>
      <div className="whatsapp">
        <div className="circle" onClick={toggleChat}>
          <button>
            <FaWhatsapp />
          </button>
        </div>
        <div className={`chat-interface ${isChatOpen ? 'active' : ''}`}>
          <h3>Hi, welcome to Inzozi website. If you have a question, send us a message and we will respond within 1 hour during working hours.</h3>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button className="send-button" onClick={handleSend}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
}

export default WhatsApp;
