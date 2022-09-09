import React from "react";
import "./CompanyCard.css";

const CompanyCard = ({ company }) => {
  const { logo, name, address, offerHours } = company;
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={`images/${logo}`} alt={name} />
      </div>
      <h1 className="card-company">{name}</h1>
      <p className="company-address">{address}</p>
      <div className="pick-up-time">
        <span>Pick-up time:</span>
        <span className="time">{offerHours}</span>
      </div>
      <p className="offers">Only a few offers left, hurry up!</p>
      <button className="card-button">View</button>
    </div>
  );
};

export default CompanyCard;
