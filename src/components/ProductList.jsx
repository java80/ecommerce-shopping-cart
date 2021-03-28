import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";

function ProductList(props) {
  let [products, setProducts] = useState([]);
  let [currentProduct, setCurrentProdut] = useState({});
  useEffect(() => {
    getData();
}, []);
  async function getData() {
    let response = await axios.get(baseURL, config);
    console.log(response.data);

  }
  
  return (
    <div id='flex-container'>


      </div>

  )

}

export default ProductList;
