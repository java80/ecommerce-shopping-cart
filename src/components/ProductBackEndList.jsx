import "./Product.css";
import {Link} from "react-router-dom"
import React from "react";
import axios from "axios";
import { baseURL, config } from "../services";
function ProductBackEndList(props) {
  let product = props.currentProduct.fields ? props.currentProduct.fields : {};
 
  return (
   
      <div id='product-list'>
      <img src={product.imgurl1} />
      <Link to={`/product/${props.currentProduct.id}`}> <h1>{product.name}</h1>  </Link>
      
        {/* <h2>{product.category}</h2>
        <h3>{product.price}</h3>
        <h2>{product.description}</h2>
         
        <img src={product.imgurl2} />
        <img src={product.imgurl3} /> */}
      <Link to={`/edit/${props.currentProduct.id}`}>
                <button>Edit</button>
            </Link>
      
        
      </div>


   

  )

}

export default ProductBackEndList;
