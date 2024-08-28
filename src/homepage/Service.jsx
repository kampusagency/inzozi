import React from "react";

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

import image1 from "./../assets/image/icon/image (1).svg";
import image2 from "./../assets/image/icon/image (2).svg";
import image3 from "./../assets/image/icon/image (3).svg";
import image4 from "./../assets/image/icon/image (4).svg";
import image5 from "./../assets/image/icon/image (5).svg";
import image6 from "./../assets/image/icon/image (6).svg";

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
            <div className="bottom">
              <a className="btn">get in touch with us:</a>
              <div className="contact">
                <a href="tel:250788565515">
                  <img src={phone} alt="Call us" />
                  <span>+250 788 565 515</span>
                </a>
                <a href="mailto:dinahkezio@gmail.com">
                  <img src={mail} alt="Mail us" />
                  <span>dinahkezio@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="" className="scroll">
          <img src={scroll} alt="scroll-down" />
        </a>
      </div>
    </>
  );
}

export default Service;
