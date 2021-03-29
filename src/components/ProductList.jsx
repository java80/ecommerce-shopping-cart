import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    setProducts(response.data.records);
    setCurrentProduct(response.data.records);
    console.log(response.data);


  }

  return (
    <div className="grid-container ">


      <div>
        { products.map(product => (<Product currentProduct ={product} />))} 
        {/* <Product currentProduct={currentProduct} /> */}
      </div>

    </div>
  )

}

export default ProductList;
