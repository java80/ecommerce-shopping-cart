import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Product from "./Product";
import Search from "./Search";
import "./Product.css";


function ProductList(props) {
  let [products, setProducts] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, [props.toggle]);


  useEffect(() => {
    if (
      
        searchTerm === "" &&
        products.length !== 0
    ) {
        setFilteredProducts(products);
    }
  }, [filteredProducts, searchTerm, products]);
  
  async function getProduct() {
    let response = await axios.get(baseURL, config);
    setProducts(response.data.records);
    setFilteredProducts(response.data.records);
  }

  return (
    <div className="search-container ">
      <Search
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                    setProducts={setProducts}
                    products={products}
                    setFilteredProducts={setFilteredProducts}
                />

      <div className= "product-container">
        {filteredProducts.map(product => (<Product currentProduct={product} key={product.id} setToggle={ props.setToggle }/>))}

      </div>

    </div>
  )

}

export default ProductList;
