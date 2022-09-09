import React from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyCard.css";

const CompanyCard = ({ company }) => {
  const { logo, name, address, offerHours, id } = company;
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/restaurants/${id}`);
  };
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
      <button
        className="card-button"
        onClick={() => {
          onClick(id);
        }}
      >
        View
      </button>
    </div>
  );
};

export default CompanyCard;
