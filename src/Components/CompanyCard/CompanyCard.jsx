import React from "react";
import "./CompanyCard.css";

const CompanyCard = () => {
  return (
    <div className="card-container">
      <div className="card-image">IMAGE</div>
      <h1 className="card-company">McDonalds</h1>
      <p className="company-address">Street number 65</p>
      <div className="pick-up-time">
        <span>Pick-up time:</span>
        <span className="time">08:00 AM - 22:00 PM</span>
      </div>
      <p className="offers">Only a few offers left, hurry up!</p>
      <button className="card-button">View</button>
    </div>
  );
};

export default CompanyCard;
