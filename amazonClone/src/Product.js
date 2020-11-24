import React from "react";
import "./Product.css";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>
        The Miracle Morning: The Not-So-Obvious...
        </p>
        <p className="product__price">
          <strong>19,99</strong>
          <small>€</small>
        </p>
        <div className="product__rating">
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41GPIof19sL._SX320_BO1,204,203,200_.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
