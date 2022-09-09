import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="card-image">IMAGE</div>
      <div className="card-body">
        <div className="card-name-and-button">
          <h2 className="product-name">Fillet-O-Fish</h2>
          <button className="add-to-cart-btn">Add to cart</button>
        </div>
        <div className="product-quantity">Quantity: 1</div>
        <div className="product-weight">Weight: 50g</div>
        <div className="product-ingredients">
          Ingredients: fish, bread, cheese
        </div>
        <div className="product-price">
          <span className="new-price">New price : 1$</span>
          <span className="old-price"> 4$</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
