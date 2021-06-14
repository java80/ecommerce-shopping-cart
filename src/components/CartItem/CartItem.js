import { usestate, useContext, useState } from 'react';
import { AppContext } from "../../AppContext";
import Product from '../Product';
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
      <p className="cart-unit-price"> {item.fields.price}</p>
      <div className="cart-product-quanity">
        <div className="cart-product-increment" onClick={()=> onRemove(item)}>
          -
        </div>
        <div className="cart-product-counter">{item.qty}</div>
        <div className="cart-product-decrement" onClick={()=> onAdd(item)}>
          +
        </div>
      </div>
      <div className="cart-subtotal">{item.fields.price * item.qty}</div>
     
    </div>
  );

}

export default CartItem