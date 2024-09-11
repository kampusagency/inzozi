import React, { useState } from "react";

import imigongo from "./../assets/image/img/imigongo.svg";
import airport from "./../assets/image/icon/airport.svg";
import hotel from "./../assets/image/icon/hotel.svg";
import holiday from "./../assets/image/icon/holiday.svg";
import safari from "./../assets/image/icon/safaris.svg";
import gorilla from "./../assets/image/icon/gorilla.svg";
import ticketing from "./../assets/image/icon/ticketing.svg";
import visa from "./../assets/image/icon/visa.svg";
import car from "./../assets/image/icon/car.svg";

import phone from "./../assets/image/icon/phone.svg";
import mail from "./../assets/image/icon/email.svg";
import scroll from "./../assets/image/icon/chevron-down.svg";

import image1 from "./../assets/image/img/image1.png";
import image2 from "./../assets/image/img/image2.png";
import image3 from "./../assets/image/img/image3.png";
import image4 from "./../assets/image/img/image4.png";
import image5 from "./../assets/image/img/image5.png";
import image6 from "./../assets/image/img/image6.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

import Modal from "../Components/modal";

const services = [
  {
    thumbnail: ticketing,
    title: "Air Tickets",
  },
  {
    thumbnail: hotel,
    title: "Hotel Bookings",
  },
  {
    thumbnail: holiday,
    title: "Holiday Packages",
  },
  {
    thumbnail: safari,
    title: "Safaris",
  },
  {
    thumbnail: gorilla,
    title: "Gorilla Trekking",
  },
  {
    thumbnail: airport,
    title: "Airport Transfers",
  },
  {
    thumbnail: visa,
    title: "Visa Application",
  },
  {
    thumbnail: car,
    title: "Car Rentals",
  },
];

const grids = [image1, image2, image3, image4, image5, image6];

function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="service">
        <div className="imigongo">
          <img src={imigongo} alt="Umugongo" />
        </div>
        <div className="container">
          <div className="content">
            <div className="wedo">
              <h2>What we do best!</h2>
              <hr className="line" />
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <img src={service.thumbnail} alt={service.title} />
                    <span className="caption">
                      {service.title?.split(" ").map((word, i) => (
                        <span key={i}>{word}</span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grids">
              {grids.map((boxes, index) => (
                <div key={index}>
                  <img src={boxes} alt="Top destinations" />
                </div>
              ))}
            </div>
           
          </div>
        </div>
        <a href="" className="scroll">
          <img src={scroll} alt="scroll-down" />
        </a>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Service;
