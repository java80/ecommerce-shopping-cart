import { useContext } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";
import { AppContext } from "../AppContext";
import { Card } from "react-bootstrap";

function Product(props) {
  let { JwtToken, adminEmail, cartItems, setCartItems, onAdd, cartItemCounter, setCartItemCounter } = useContext(AppContext);
  let product = props.currentProduct.fields ? props.currentProduct.fields : {};
  //console.log("product ", props.currentProduct)
  //console.log("cart item counter ",cartItemCounter)
  async function handleDelete() {
    let ProductUrl = `${baseURL}/${props.currentProduct.id}`;
    await axios.delete(ProductUrl, config);
    props.setToggle((prevState) => !prevState);
  }
  // const updateCartItems = () => {
  //   //console.log("cart click");
  //   const cartItem = {
  //     img: product.imgurl1,
  //     name: product.name,
  //     price: product.price,
      
  //   }
  //   const cartItemsArray = [...cartItems, cartItem]
  //   setCartItemCounter(++cartItemCounter);
  //   setCartItems(cartItemsArray)
  // }
  
  return (
    <>
      <div className="card-product" >
        <img className="card-img-top" src={product.imgurl1} alt="Card cap" />
        <div className="card-body">
          <Link to={`/product/${props.currentProduct.id}`}>
            <h5 className="card-title">{product.name}</h5>
          </Link>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <a href="#" className="btn btn-primary mb-2" onClick={()=> onAdd(props.currentProduct)}>
            Add to cart
          </a>
          {JwtToken && adminEmail === "ikeekedede@gmail.com" && (
            <div>
              <Link to={`/edit/${props.currentProduct.id}`}>
                <button className="btn btn-primary mr-3">Edit</button>
              </Link>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
