import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiService from "../utils/apiService";
import ProductCard from "../Components/ProductCard/ProductCard";
import { useParams } from "react-router";

import "./Restaurant.css";

const Restaurant = () => {
  const { data: restaurants, isLoading } = useQuery(
    ["restaurants"],
    apiService.getRestaurants
  );

  const params = useParams();

  console.log(params.id);

  const restaurant = restaurants && restaurants[params.id];

  const products = restaurant && restaurant.products;

  return (
    <div className="company-products-container">
      <img
        className="company-img"
        src={`/images/${restaurant && restaurant.logo}`}
        alt={restaurant && restaurant.name}
      />
      <p>{restaurant && restaurant.offerHours}</p>
      <div className="products-container">
        {restaurant &&
          products.map((product) => {
            const { name } = product;

            return <ProductCard product={product} />;
          })}
      </div>
    </div>
  );
};

export default Restaurant;
