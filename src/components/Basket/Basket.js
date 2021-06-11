import { useState, useContext } from "react";
import { AppContext } from "../../AppContext"
import "./Basket.css";
import CartItem from "../CartItem/CartItem"
const Basket = () => {

  const { cartItems } = useContext(AppContext);
  console.log(cartItems)
  const addToCart = (product) => {
    

  }
  return (
    <div className="checkout">
      <div className="cart-navbar">
        <div className="navbar-item"> Items</div>
        <div className="navbar-item"> Unit Price</div>
        <div className="navbar-item"> Quantity</div>
        <div className="navbar-item"> Subtotal</div>
      </div>

      <div className="cart-navbar-body">
        {/* <CartItem /> */}
        {cartItems.length > 0 ? cartItems.map(() => {
          
          return (
            <CartItem/>
          )
        }) : <h1> Cart is Empty</h1>}
        
      </div>
    </div>
  );
};

export default Basket;
