import React from "react";

import "./../styles/component.scss";

import imigongo from "./../assets/image/img/imigongo.svg";
import brussel from "./../assets/image/partners/brussels.png";
import egyptian from "./../assets/image/partners/egyptian.png";
import ethiopian from "./../assets/image/partners/ethiopian.png";
import kenyan from "./../assets/image/partners/kenyan.png";
import qatar from "./../assets/image/partners/qatar.png";
import turkish from "./../assets/image/partners/turkish.png";

const partners = [
  {
    name: "Brussels Airlines",
    thumbnail: brussel,
  },
  {
    name: "Egyptian Airlines",
    thumbnail: egyptian,
  },
  {
    name: "Ethiopian Airlines",
    thumbnail: ethiopian,
  },
  {
    name: "Kenyan Airways",
    thumbnail: kenyan,
  },
  {
    name: "Qatar Airways",
    thumbnail: qatar,
  },
  {
    name: "Turkish Airlines",
    thumbnail: turkish,
  },
];

const offerings = [
  { title: "Air ticketing", url: "https://" },
  { title: "Safaris", url: "https://" },
  { title: "Holiday Packages", url: "https://" },
  { title: "Hotel Booking", url: "https://" },
  { title: "Gorilla Trekking", url: "https://" },
  { title: "Car Rentals", url: "https://" },
  { title: "Airport Transfers", url: "https://" },
  { title: "Visa Application", url: "https://" },
];

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="imigongo">
          <img src={imigongo} alt="Umugongo" />
        </div>
        <div className="container">
          <div className="content">
            <div className="top">
              <ul>
                {offerings.map((offer, index) => (
                  <li>
                    <a>{offer.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="line" />
            <div className="bottom">
              <ul>
                {partners.map((partner, index) => (
                  <li key={index}>
                    <img src={partner.thumbnail} alt={partner.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
