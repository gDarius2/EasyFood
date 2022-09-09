import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, image, quantity, price, originalPrice, weight, ingredients } =
    product;
  return (
    <div className="product-card-container">
      <div className="product-card-image">
        <img src={`/images/${image}`} alt={name} />
      </div>
      <div className="product-card-body">
        <div className="card-name-and-button">
          <h3 className="product-name">{name}</h3>
          <button className="add-to-cart-btn">Add to cart</button>
        </div>
        <div className="product-quantity">Quantity: {quantity}</div>
        <div className="product-weight">Weight: {weight}</div>
        <div className="product-ingredients">Ingredients: {ingredients}</div>
        <div className="product-price">
          <span className="new-price">New price : {price}$</span>
          <span className="old-price"> {originalPrice}$</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
