import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Product from "./Product";


function ProductList(props) {
  let [products, setProducts] = useState([]);
  let [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
    getProduct();
}, []);
  async function getProduct() {
    let response = await axios.get(baseURL, config);
    //setProducts(response.data.records);
    console.log(response);

  }
  
  return (
    <div id='flex-container'>


      </div>

  )

}

export default ProductList;
