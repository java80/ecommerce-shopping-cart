import { usestate, useContext, useState } from 'react';
import { AppContext } from "../../AppContext";
import Product from '../Product';
import { Button } from 'react-bootstrap';
const CartItem = ({ item }) => {
  let { cartItemCounter, setCartItemCounter,onAdd, onRemove } = useContext(AppContext);
  let [singleItemCounter, setSingleItemCounter] = useState(1)
  //console.log("cart item ", item);
  const handleIncement = () => {
    
    setSingleItemCounter(++singleItemCounter)
  //  console.log("increment ", singleItemCounter);
  }
  
  const handleDecrement = () => {


    setSingleItemCounter(singleItemCounter===1 ? 1 : --singleItemCounter);
    
  };
  

  return (
    <div className="cart-navbar-row">
      <div className="cart-image-price">
        <img
          src={item.fields.imgurl1}
          alt=""
          style={{ width: "50px", height: "50px" }}
          className="cart-product-image"
        />
        <p className="cart-unit-name"> {item.fields.name}</p>
      </div>
      <p className="cart-unit-price"> ${Number(item.fields.price).toFixed(2)}</p>
      <div className="cart-product-quanity">
        <div className="cart-product-increment" onClick={() => onRemove(item)}>
          -
        </div>
        <div className="cart-product-counter">{item.qty}</div>
        <div className="cart-product-decrement" onClick={() => onAdd(item)}>
          +
        </div>
      </div>
      <div className="cart-subtotal">
        ${Number(item.fields.price * item.qty).toFixed(2)}
      </div>
    </div>
  );

}

export default CartItem