import React from "react";
import hotel1 from "../images/hotel-1.jpeg"
import HotelServices from "../components/HotelServices";
import swimSrc from "../images/swim.jpeg"
import resSrc from "../images/restaurant.jpeg"
import spaSrc from "../images/spa.jpeg"
import gymSrc from "../images/gym.jpeg"
import barSrc from "../images/bar.jpeg"
import pickupSrc from "../images/pickup.jpeg"




function ourservices() {
  return (
    <>
      <div className="container-fluid d-flex p-0">
        <img className="w-100" src={hotel1} alt="" />
      </div>
      <div className="text-center text-secondary">
        <h5>Chose from the best luxury rooms avaialable in Town! </h5>
      </div>
      <div className="my-5 text-center">
        <h3>HOTEL FACILITIES</h3>
      </div>
      <HotelServices title="Swimming Pool" src={swimSrc}></HotelServices>
      <HotelServices title="Restaurant" src={resSrc}></HotelServices>
      <HotelServices title="Bars" src={barSrc}></HotelServices>
      <HotelServices title="Shuttle-Service" src={pickupSrc}></HotelServices>
      <HotelServices title="Spa" src={spaSrc}></HotelServices>
      <HotelServices title="Gym" src={gymSrc}></HotelServices>
    </>
  );
}

export default ourservices;
