import { usestate, useContext, useState } from 'react';
import { AppContext } from "../../AppContext";
import Product from '../Product';
const CartItem = ({ item }) => {
  let { cartItemCounter, setCartItemCounter } = useContext(AppContext);
  let [singleItemCounter, setSingleItemCounter] = useState(1)
  console.log(item);
  const handleIncement = () => {
    
    setSingleItemCounter(++singleItemCounter)
    console.log("increment ", singleItemCounter);
  }
  
  const handleDecrement = () => {


    setSingleItemCounter(singleItemCounter===1 ? 1 : --singleItemCounter);
    
  };
  

  return (
    <div className="cart-navbar-row">
      <div className="cart-image-price">
        <img
          src={item.img}
          alt=""
          style={{ width: "50px", height: "50px" }}
          className="cart-product-image"
        />
        <p className="cart-unit-name"> {item.name}</p>
      </div>
      <p className="cart-unit-price"> {item.price}</p>
      <div className="cart-product-quanity">
        <div className="cart-product-increment" onClick={handleDecrement}>
          -
        </div>
        <div className="cart-product-counter">{singleItemCounter}</div>
        <div className="cart-product-decrement" onClick={handleIncement}>
          +
        </div>
      </div>
      <div className="cart-subtotal">{item.price * singleItemCounter}</div>
     
    </div>
  );

}

export default CartItem