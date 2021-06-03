import React from 'react'
import ReactDOM from 'react-dom'
import "./Product.css";
import {Link} from "react-router-dom"
import { baseURL, config } from "../services";
import axios from "axios";
import {Card} from 'react-bootstrap';

function Product(props) {
  let product = props.currentProduct.fields ? props.currentProduct.fields : {};
 
  async function handleDelete() {
  
    let ProductUrl = `${baseURL}/${props.currentProduct.id}`
    await axios.delete(ProductUrl, config);
    props.setToggle(prevState => !prevState);
}
  return (
    <Card style={{ width: '320px' }}>
      <div id='product-list'>
        <img alt={product.name}src={product.imgurl1} />
      <Link to={`/product/${props.currentProduct.id}`}> <h1>{product.name}</h1>  </Link>
      <div>
      <Link to={`/edit/${props.currentProduct.id}`}>
                <button className= "btn btn-primary">Edit</button>
        </Link>
        
        
                <button className="btn btn-danger" onClick = {handleDelete}> Delete </button>
            
      </div>
        
      </div>

      </Card>
   
  )

}

export default Product;
