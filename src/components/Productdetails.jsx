import React from "react";
import "./Product.css";
import "./Productdetails.css";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { baseURL, config } from "../services";
import axios from "axios"
import { Card} from 'react-bootstrap';

function Productdetails() {
  let { id } = useParams();
  const [product, setProduct] = useState({})
  useEffect(() => {
    getProduct();
   // eslint-disable-next-line
  }, [])

  async function getProduct() {
    let response = await axios.get(baseURL + "/" + id, config);
    setProduct(response.data);

  }

  return product.fields ? <Card > <div >
    <div className="product-details">
      <div className="produt-main-image"> <img alt ={product.fields.name} src={product.fields.imgurl1} />  </div>
      <div className="product-name-price">
        <div> <h1> {product.fields.name} </h1> </div>
        <div> <h1>  {product.fields.price}  <button className="btn btn-primary">Add to Cart</button> </h1></div>
        
        <div> <h3>{product.fields.description}</h3></div>
        <div> <h1>  Category:  {product.fields.category} </h1></div>
      </div>
    </div>

    <div className="hover-image">
      <div> <img alt ={product.fields.name} src={product.fields.imgurl1} />  </div>
      <div> <img alt ={product.fields.name} src={product.fields.imgurl1} />  </div>
      <div> <img alt ={product.fields.name}  src={product.fields.imgurl1} />  </div>
    </div>



  </div> </Card>: null;
}

export default Productdetails;