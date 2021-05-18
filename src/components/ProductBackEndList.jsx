import "./Product.css";
import { Link } from "react-router-dom"
import React from "react";
function ProductBackEndList(props) {
  let product = props.currentProduct.fields ? props.currentProduct.fields : {};

  return (

    <div id='product-list'>
      <img src={product.imgurl1} />
      <Link to={`/product/${props.currentProduct.id}`}> <h1>{product.name}</h1>  </Link>

      <Link to={`/edit/${props.currentProduct.id}`}>
        <button>Edit</button>
      </Link>
    </div>

  )

}

export default ProductBackEndList;
