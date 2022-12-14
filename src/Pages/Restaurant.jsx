import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiService from "../utils/apiService";
import ProductCard from "../Components/ProductCard/ProductCard";
import { useParams, useNavigate } from "react-router";

import "./Restaurant.css";

const Restaurant = () => {
  const { data: restaurants, isLoading } = useQuery(
    ["restaurants"],
    apiService.getRestaurants
  );

  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);

  const restaurant = restaurants && restaurants[params.id];

  const products = restaurant && restaurant.products;

  return (
    <div className="company-products-container">
      <button
        className="buttonBack"
        onClick={() => {
          navigate("/");
        }}
      >
        {"< Go back"}
      </button>
      <img
        className="company-img"
        src={`/images/${restaurant && restaurant.logo}`}
        alt={restaurant && restaurant.name}
      />
      <p className="hours">
        <strong>{restaurant && restaurant.offerHours}</strong>
      </p>
      <span>
        <strong>Address: {restaurant && restaurant.address}</strong>
      </span>
      <div className="products-container">
        {restaurant &&
          products.map((product) => {
            return <ProductCard product={product} />;
          })}
      </div>
    </div>
  );
};

export default Restaurant;
